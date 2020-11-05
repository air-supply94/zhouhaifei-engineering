import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// Support pass props from layout to child routes
const RouteWithProps = ({ path, exact, strict, render, location, sensitive, ...rest }) => (
  <Route
    exact={exact}
    location={location}
    path={path}
    render={(props) => render({
      ...props,
      ...rest,
    })}
    sensitive={sensitive}
    strict={strict}
  />
);

function withRoutes(route) {
  const { Routes } = route;
  let len = Routes.length - 1;
  let Component = (args) => {
    const { render, ...props } = args;
    return render(props);
  };
  while (len >= 0) {
    const AuthRoute = Routes[len];
    const OldComponent = Component;
    Component = (props) => (
      <AuthRoute {...props}>
        <OldComponent {...props}/>
      </AuthRoute>
    );
    len -= 1;
  }

  return (args) => {
    const { render, ...rest } = args;
    return (
      <RouteWithProps
        {...rest}
        render={(props) => {
          return (
            <Component
              {...props}
              render={render}
              route={route}
            />
          );
        }}
      />
    );
  };
}

/**
 * A flag indicating the route changed or not
 */
let routeChanged = false;

function wrapWithInitialProps(WrappedComponent, initialProps, extraProps = {}) {
  return class SSRComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { extraProps: { ...extraProps }};
      if (!routeChanged) {
        routeChanged = !window.g_useSSR || (props.history && props.history.action !== 'POP');
      }
    }

    // eslint-disable-next-line require-await
    async componentDidMount() {
      if (routeChanged) {
        this.getInitialProps();
      }
    }

    componentDidUpdate(prevProps) {
      const { location } = this.props;

      /* check if pathname changed,
         to catch potential case of routes reusing the same page instance
         TODO: also check location.search? */
      if (prevProps.location.pathname !== location.pathname) {
        routeChanged = true;
        this.getInitialProps();
      }
    }

    componentWillUnmount() {
      // Catch the case of navigating back to the root layout
      routeChanged = true;
    }

    // A const static value marking itself as wrapped
    wrappedWithInitialProps = true;

    // 前端路由切换时，也需要执行 getInitialProps
    async getInitialProps() {
      // the values may be different with findRoute.js
      const { match, location } = this.props;
      const { extraProps } = this.state;
      this.setState({
        extraProps: {
          ...extraProps,
          fetchingProps: true,
        },
      });
      const nextExtraProps =
        (await WrappedComponent.getInitialProps({
          isServer: false,
          route: match,
          location,

          // provide a copy of previous initialProps for quick reuse
          prevInitialProps: extraProps,
          ...initialProps,
        })) || {};
      nextExtraProps.fetchingProps = false;
      this.setState({ extraProps: nextExtraProps });
    }

    render() {
      return (
        <WrappedComponent
          {...{
            ...this.props,
            ...this.state.extraProps,
          }}
        />
      );
    }
  };
}

export default function renderRoutes(routes, extraProps = {}, switchProps = {}) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route, i) => {
        if (route.redirect) {
          return (
            <Redirect
              exact={route.exact}
              from={route.path}
              key={route.key || i}
              strict={route.strict}
              to={route.redirect}
            />
          );
        }
        const RouteRoute = route.Routes ? withRoutes(route) : RouteWithProps;
        return (
          <RouteRoute
            exact={route.exact}
            key={route.key || i}
            path={route.path}
            render={(props) => {
              const { location } = props;

              /* Drop expired SSR init props
                 (SSR initial props are only valid before user navigation) */
              if (routeChanged) {
                extraProps = {};
              }

              // TODO: ssr StaticRoute context hook, handle 40x / 30x
              const childRoutes = renderRoutes(route.routes, extraProps, { location });
              if (route.component) {
                const newProps = {
                  ...props,
                  ...extraProps,
                };
                const { component: Component } = route;
                return (

                  // reuse component for the same umi path (could be dynamic)
                  <Component
                    key={route.path}
                    {...newProps}
                    route={route}
                  >
                    {childRoutes}
                  </Component>
                );
              }
              return childRoutes;
            }}
            sensitive={route.sensitive}
            strict={route.strict}
          />
        );
      })}
    </Switch>
  ) : null;
}
