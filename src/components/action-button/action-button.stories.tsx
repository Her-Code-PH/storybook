import type { Meta, StoryObj } from "@storybook/react";
import ActionButton  from "./action-button";

const meta: Meta<typeof ActionButton> = {
  component: ActionButton
}

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Outlined: Story = {
  args: {
    buttonText: 'Outlined Button',
    type: 'outlined',
    href: '/'
  },
};

export const Contained: Story = {
  args: {
    buttonText: 'Contained Button',
    type: 'contained',
    href: '/'
  },
};
