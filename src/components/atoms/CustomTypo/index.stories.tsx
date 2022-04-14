import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomTypo from "./index";

export default{
    title:'atoms/CustomTypo',
    component:CustomTypo
}as ComponentMeta<typeof CustomTypo>;

export const cTypo: ComponentStory<typeof CustomTypo> = () => (
    <CustomTypo variant='heading' component='div' children='This is a customtypo'/>
)