import { screen } from '@testing-library/react';

import { Home } from '.';
import { renderTheme } from '../../styles/renderTheme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: 'blue',
  });
});
