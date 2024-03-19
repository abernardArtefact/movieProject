import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import StarRating from "./StarRating";

const meta: Meta<typeof StarRating> = {
  title: "Common/StarRating",
  component: StarRating,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const Default: Story = {
  args: {},
};
