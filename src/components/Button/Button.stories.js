import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = args => <Button {...args}>{args.label}</Button>;

// export const Primary = () => <Button>Hello Roman</Button>;
// export const Secondary = () => <Button secondary>Hello</Button>;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Close/save',
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: 'Remove',
};
