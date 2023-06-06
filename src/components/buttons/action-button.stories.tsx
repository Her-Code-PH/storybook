import { Meta, StoryObj } from "@storybook/react";
import ActionButton from "./action-button";

const meta: Meta<typeof ActionButton> = {
  component: ActionButton
}

export default meta;
type Story = StoryObj<typeof ActionButton>;

export const Outlined: Story = {
  args: {
    buttonText: 'Outlined',
    type: 'outlined',
    onClick: () => { console.log('outlined') }
  }
}

export const Contained: Story = {
  args: {
    buttonText: 'Contained',
    type: 'contained',
    onClick: () => { console.log('contained') }
  }
}
