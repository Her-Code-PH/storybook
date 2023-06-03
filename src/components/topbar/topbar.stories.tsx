import type { Meta, StoryObj } from '@storybook/react'
import Topbar from './topbar'

export default {
  component: Topbar,
} as Meta<typeof Topbar>;

const Template: StoryObj<typeof Topbar> = (args) => <Topbar {...args}/>

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {
    name: 'Lim Yoona'
  }
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
