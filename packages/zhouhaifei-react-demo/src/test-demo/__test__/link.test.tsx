import React from 'react';
import renderer from 'react-test-renderer';
import { Link } from '../link';

test('Link', () => {
  let component: renderer.ReactTestRenderer;
  renderer.act(() => {
    component = renderer.create(
      <Link page="http://www.facebook.com">
        Facebook
      </Link>
    );
  });

  let tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    // manually trigger the callback
    tree.props.onMouseEnter();
  });

  // re-rendering
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    // manually trigger the callback
    tree.props.onMouseLeave();
  });

  // re-rendering
  tree = component.toJSON() as renderer.ReactTestRendererJSON;
  expect(tree).toMatchSnapshot();
});
