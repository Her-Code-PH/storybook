import type { Meta, StoryObj } from '@storybook/react'
import Topbar from './topbar'

export default {
  component: Topbar,
} as Meta<typeof Topbar>;

const Template: StoryObj<typeof Topbar> = () => <Topbar />

export const Default = Template.bind({})