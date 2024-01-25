import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta = {
  title: "Components/OrderTable/OrderRow/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
} as Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PaginationDefault: Story = {
  render: () => <Checkbox onChange={() => {}} />,
};
