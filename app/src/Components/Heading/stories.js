import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'HELLO',
    isLight: false,
  },
  argTypes: {
    children: { type: 'string' },
    isLight: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Dark = (args) => <Heading {...args} />;
export const Light = (args) => <Heading {...args} isLight />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};
