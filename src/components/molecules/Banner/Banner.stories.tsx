import { ComponentMeta, ComponentStory } from "@storybook/react";
import Banner from "./Banner";

export default{
    title:'organisms/Banner',
    component:Banner
}as ComponentMeta<typeof Banner>;

export const banner: ComponentStory<typeof Banner> = () => (
    <Banner />
)