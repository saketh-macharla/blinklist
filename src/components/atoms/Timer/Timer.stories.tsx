import Timer from "./Timer";
import { ComponentStory, ComponentMeta } from '@storybook/react';



export default{
    title:'atoms/Timer',
    component:Timer
}as ComponentMeta<typeof Timer>

const Template:ComponentStory<typeof Timer> = (args) => <Timer {...args}></Timer>
export const Timerstory = Template.bind({});
Timerstory.args={
    children:'13-minute read'
}