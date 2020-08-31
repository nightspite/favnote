import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [withKnobs],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

// const Template = args => (
//   <Button {...args} color={value}>
//     {args.label}
//   </Button>
// );

export const withAButton = () => (
  <>
    <Button>Hello Roman</Button>
    <Button secondary>Close/save</Button>
  </>
);

export const asDynamicVariables = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);

  return (
    <>
      <Button color={value}>Hello Roman</Button>
      <Button secondary>Close/save</Button>
    </>
  );
};

// export const Secondary = () => (
//   <Button secondary color={value}>
//     Hello
//   </Button>
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Close/save',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   secondary: true,
//   label: 'Remove',
// };
