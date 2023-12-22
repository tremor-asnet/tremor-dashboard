import type { Meta, StoryObj } from "@storybook/react";

// Components
import IconBox from "./IconBox";

const meta = {
  title: "Components/ IconBox",
  component: IconBox,
  tags: ["autodocs"],
} as Meta<typeof IconBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const IconBoxDefault: Story = {
  render: () => <IconBox />,
};
