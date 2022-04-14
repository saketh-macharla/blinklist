import { ComponentMeta, ComponentStory } from "@storybook/react";
import Bleft from "./Bleft";

export default{
    title:'molecules/Bleft',
    component:Bleft
}as ComponentMeta<typeof Bleft>;

export const banner: ComponentStory<typeof Bleft> = () => (
    <Bleft />
)