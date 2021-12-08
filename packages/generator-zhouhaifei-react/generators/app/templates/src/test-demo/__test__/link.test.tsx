import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { Link } from '../link';

afterEach(cleanup);

test('Link', () => {
  const component = render(
    <Link page="http://www.facebook.com">
      Facebook
    </Link>
  );

  // init
  expect(component.asFragment()).toMatchSnapshot();

  // mouseEnter
  fireEvent.mouseEnter(component.container.firstChild);
  expect(component.asFragment()).toMatchSnapshot();

  // mouseLeave
  fireEvent.mouseLeave(component.container.firstChild);

  expect(component.asFragment()).toMatchSnapshot();
});
