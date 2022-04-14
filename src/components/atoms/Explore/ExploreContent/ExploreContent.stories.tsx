import { ThemeProvider } from "@mui/material/styles";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import theme from "../../../../theme";
// import theme from "../../../../theme";
import ExploreContent from './ExploreContent'

export default{
    title:'atoms/ExploreContent',
    component:ExploreContent
}as ComponentMeta<typeof ExploreContent>;

export const exploreContent: ComponentStory<typeof ExploreContent> = () => (
        
            <ExploreContent />
)