import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    isThemeDark: false,
    isUppercase: false,
    as: 'h6',
    size: 'huge',
  },
  argTypes: {
    children: { type: 'string' },
    isThemeDark: { type: 'boolean' },
    isUppercase: { type: 'boolean' },
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'big', 'huge'],
      },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
  isThemeDark: false,
};

Dark.args = {
  children: 'O texto está claro',
  isThemeDark: true,
};
