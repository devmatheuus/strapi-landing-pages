import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../src/styles/globalStyles';
import { theme } from '../src/styles/theme';

addDecorator(withKnobs);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primary,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
];
