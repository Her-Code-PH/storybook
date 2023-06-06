import type { Meta, StoryObj } from "@storybook/react";
import HrefButton from "./href-button";

const meta: Meta<typeof HrefButton> = {
  component: HrefButton
}

export default meta;
type Story = StoryObj<typeof HrefButton>;

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

export const Ghost: Story = {
  args: {
    buttonText: 'Ghost Button',
    type: 'text',
    href: '/'
  },
};
