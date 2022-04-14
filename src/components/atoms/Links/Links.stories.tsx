// import Links from "./Links";
// import { ComponentStory, ComponentMeta } from '@storybook/react';

// export default{
//     title:'atoms/Links',
//     component:Links
// } as ComponentMeta<typeof Links>


// const Template :ComponentStory<typeof Links> = args => <Links {...args}/>

// export const Hoverlink = Template.bind({});
// Hoverlink.args={
//     children:'Underline',
//     underline:'hover',

// }

import { ComponentMeta, ComponentStory } from "@storybook/react";
import LinksIcon from './Links';
export default {
  title: "Atoms/LinksIcon",
  component: LinksIcon,
} as ComponentMeta<typeof LinksIcon>;

const template: ComponentStory<typeof LinksIcon> = (args) => (
  <LinksIcon {...args}/>
);
export const Default = template.bind({});
Default.args = {
  children: "My Library",
  clicked: false,
};