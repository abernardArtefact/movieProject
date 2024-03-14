import type { Meta, StoryObj } from "@storybook/react";

import CardSmall from "./CardSmall";

const meta: Meta<typeof CardSmall> = {
  title: "Common/CardSmall",
  component: CardSmall,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardSmall>;

export const Default: Story = {
  args: {},
};
