import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { Heading } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render Heading component with default values', () => {
    renderTheme(<Heading>Text</Heading>);

    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      color: theme.colors.primary,
      'font-size': theme.fonts.sizes.medium,
      'text-transform': 'none',
    });
  });

  it('should render Heading component with white color', () => {
    renderTheme(<Heading isThemeDark>Text</Heading>);

    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render Heading component with correct sizes', () => {
    const { rerender } = renderTheme(<Heading>Small</Heading>);

    const headingSmall = screen.getByRole('heading', { name: /small/i });

    expect(headingSmall).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Medium</Heading>
      </ThemeProvider>,
    );

    const headingMedium = screen.getByRole('heading', {
      name: /medium/i,
    });

    expect(headingMedium).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });

    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Big</Heading>
      </ThemeProvider>,
    );

    const headingBig = screen.getByRole('heading', {
      name: /big/i,
    });

    expect(headingBig).toHaveStyle({
      'font-size': theme.fonts.sizes.xLarge,
    });
  });

  it('should render Heading component with correct font-size when mobile display', () => {
    renderTheme(<Heading size="huge">Huge</Heading>);

    const headingHuge = screen.getByRole('heading', { name: /huge/i });

    expect(headingHuge).toHaveStyleRule('font-size', theme.fonts.sizes.xLarge, {
      media: theme.media.lteMedium,
    });
  });

  it('should render Heading component with uppercase letters', () => {
    renderTheme(<Heading isUppercase>Text</Heading>);

    const heading = screen.getByRole('heading', { name: /text/i });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render Heading component with correct tag', () => {
    const { container } = renderTheme(<Heading as="h6">Text</Heading>);

    const heading = screen.getByRole('heading', { name: /text/i });
    const headingOnContainer = container.querySelector('h6');

    expect(heading).toContainHTML('h6');
    expect(headingOnContainer.tagName.toLowerCase()).toBe('h6');
  });
});
