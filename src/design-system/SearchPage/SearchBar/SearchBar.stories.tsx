import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Common/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {},
};
