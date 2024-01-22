// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Select from ".";

const meta = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Select title="Filter" />,
};
