import { TypeOfTag } from "typescript";
import Searchicon from "./Searchicon";
import { ComponentStory, ComponentMeta} from '@storybook/react';


export default{
    title:'atoms/Searchicon',
    component:Searchicon
} as ComponentMeta<typeof Searchicon>

export const search:ComponentStory<typeof Searchicon> = () => (
    <Searchicon></Searchicon>
);
