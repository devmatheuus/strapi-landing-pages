import { Text } from '.';
import { theme } from '../../styles/theme';

export default {
  title: 'Text',
  component: Text,
  args: {
    children: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nam libero molestiae consequuntur numquam alias hic praesentium optio repellat,
        sint tempore placeat tempora commodi quis velit, quasi error nisi sequi quibusdam.`,
    color: theme.colors.primary,
  },
  argTypes: {
    children: { type: 'string' },
    color: {
      options: [theme.colors.primary, theme.colors.white],
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Text {...args} />
    </div>
  );
};
