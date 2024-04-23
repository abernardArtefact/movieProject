import type { Meta, StoryObj } from "@storybook/react";

import StarRatingCommunity from "./StarRatingCommunity";

const meta: Meta<typeof StarRatingCommunity> = {
  title: "Common/StarRatingCommunity",
  component: StarRatingCommunity,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StarRatingCommunity>;

export const Default: Story = {
  args: {},
};
