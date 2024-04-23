import type { Meta, StoryObj } from "@storybook/react";

import Favoris from "./Favoris";

const meta: Meta<typeof Favoris> = {
  title: "Common/Favoris",
  component: Favoris,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Favoris>;

export const Default: Story = {
  args: {},
};
