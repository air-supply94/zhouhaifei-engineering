import { RouteAssembleConfig } from '@/compnents/routeAssemble';
import { Spin } from 'antd';
import React from 'react';
import { RouteChildrenProps } from 'react-router';

export class RouteLazyLoad extends React.PureComponent<RouteAssembleConfig & RouteChildrenProps | any> {
  constructor(props) {
    super(props);
    this.originTitle = document.title;
  }

  originTitle: string;

  componentDidMount() {
    if (this.props.title) {
      document.title = this.props.title;
    }
  }

  componentWillUnmount() {
    document.title = this.originTitle;
  }

  render() {
    const { title, path, DefaultLayout, LazyComponent, ...rest } = this.props;

    return (
      <React.Suspense fallback={<Spin size="large"/>}>
        <LazyComponent {...rest}/>
      </React.Suspense>
    );
  }
}
