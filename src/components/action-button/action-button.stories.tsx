import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import ActionButton  from "./action-button";

export default {
  component: ActionButton,
  // argTypes: {},
  // args: {},
} as Meta<typeof ActionButton>;

const Template: StoryObj<typeof ActionButton> = (args: any) => <ActionButton {...args} />

export const Outlined = Template.bind({});
Outlined.args = {
  buttonText: 'Outlined Button',
  type: 'outlined',
  href: "/"
}

export const Contained = Template.bind({});
Contained.args = {
  buttonText: 'Contained Button',
  type: 'contained',
  href: "/"
}
