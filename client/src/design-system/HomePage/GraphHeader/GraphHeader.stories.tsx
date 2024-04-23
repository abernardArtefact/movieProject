import type { Meta, StoryObj } from "@storybook/react";

import GraphHeader from "./GraphHeader";

const meta: Meta<typeof GraphHeader> = {
  title: "Common/GraphHeader",
  component: GraphHeader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof GraphHeader>;

export const Default: Story = {
  args: {},
};
