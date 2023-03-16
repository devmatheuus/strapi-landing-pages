import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'HELLO',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => <Heading {...args} />;
