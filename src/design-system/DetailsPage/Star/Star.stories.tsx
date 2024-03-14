import type { Meta, StoryObj } from "@storybook/react";

import Star from "./Star";

const meta: Meta<typeof Star> = {
  title: "Common/Star",
  component: Star,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Star>;

export const Default: Story = {
  args: {},
};
