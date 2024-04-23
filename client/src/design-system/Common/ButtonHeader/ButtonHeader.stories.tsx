import type { Meta, StoryObj } from "@storybook/react";

import ButtonHeader from "./ButtonHeader";

const meta: Meta<typeof ButtonHeader> = {
  title: "Common/ButtonHeader",
  component: ButtonHeader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ButtonHeader>;

export const Default: Story = {
  args: {},
};
