import type { Meta, StoryObj } from "@storybook/react";

import Logo from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Common/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
