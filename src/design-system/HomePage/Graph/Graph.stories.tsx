import type { Meta, StoryObj } from "@storybook/react";

import Graph from "./Graph";

const meta: Meta<typeof Graph> = {
  title: "Common/Graph",
  component: Graph,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Graph>;

export const Default: Story = {
  args: {},
};
