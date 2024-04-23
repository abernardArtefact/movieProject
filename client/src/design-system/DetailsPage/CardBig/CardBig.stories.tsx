import type { Meta, StoryObj } from "@storybook/react";

import CardBig from "./CardBig";

const meta: Meta<typeof CardBig> = {
  title: "Common/CardBig",
  component: CardBig,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardBig>;

export const Default: Story = {
  args: {},
};
