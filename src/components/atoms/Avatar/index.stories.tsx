import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomAvatar from './index';

export default{
    title:'atoms/Avatar',
    component:CustomAvatar
}as ComponentMeta<typeof CustomAvatar>

const Template:ComponentStory<typeof CustomAvatar> = (args) => <CustomAvatar  {...args}/>;

export const loginAvatar = Template.bind({});
loginAvatar.args={
    children:'A'
}