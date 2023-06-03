import type { Meta, StoryObj } from '@storybook/react'
import Topbar from './topbar'

const meta: Meta<typeof Topbar> = {
  component: Topbar
}

export default meta;
type Story = StoryObj<typeof Topbar>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Lim Yoona'
    }
  },
};

export const LoggedOut: Story = {
  args: {},
};
