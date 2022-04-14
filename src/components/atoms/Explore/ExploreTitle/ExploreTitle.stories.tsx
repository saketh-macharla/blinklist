import { ComponentMeta, ComponentStory } from "@storybook/react";
import ExploreTitle from "./ExploreTitle";

export default{
    title:'atoms/ExploreTitle',
    component:ExploreTitle
}as ComponentMeta<typeof ExploreTitle>;

export const exploreTitle: ComponentStory<typeof ExploreTitle> = () => (
    <ExploreTitle />
)