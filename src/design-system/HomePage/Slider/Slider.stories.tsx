import type { Meta, StoryObj } from "@storybook/react";

import Slider from "./Slider";

const meta: Meta<typeof Slider> = {
  title: "Common/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {},
};
