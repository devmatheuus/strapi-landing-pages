import { screen } from '@testing-library/react';

import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  // const { debug } = renderTheme(<Home />);
  // //   debug();

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.primary,
  });

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', theme.colors.primary);
});
