import { screen } from '@testing-library/react';

<<<<<<< HEAD
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  // const { debug } = renderTheme(<Home />);
  // //   debug();
=======
import { Home } from '.';
import { renderTheme } from '../../styles/renderTheme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  debug();
>>>>>>> b7eb6140905bc72682448e6a8d46f8af5a0a2257

  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
<<<<<<< HEAD
    background: theme.colors.primary,
  });

  expect(headingContainer).toMatchSnapshot();
  expect(headingContainer).toHaveStyleRule('background', theme.colors.primary);
=======
    background: 'blue',
  });
>>>>>>> b7eb6140905bc72682448e6a8d46f8af5a0a2257
});
