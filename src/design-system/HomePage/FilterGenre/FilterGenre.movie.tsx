import type { Meta, StoryObj } from "@storybook/react";

import FilterGenre from "./FilterGenre";

const meta: Meta<typeof FilterGenre> = {
  title: "Common/FilterGenre",
  component: FilterGenre,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FilterGenre>;

export const Default: Story = {
  args: {},
};
