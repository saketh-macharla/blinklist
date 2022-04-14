import DisplayTime from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "molecules/DisplayTime",
  component: DisplayTime,
} as ComponentMeta<typeof DisplayTime>;

export const displayTime: ComponentStory<typeof DisplayTime> = () => (
  <DisplayTime>13-minutes read</DisplayTime>
);