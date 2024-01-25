// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderFilter from "../OrderFilter";

const meta = {
  title: "Components/OrderFilter",
  tags: ["autodocs"],
  component: OrderFilter,
} as Meta<typeof OrderFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <OrderFilter title="Filter" />,
};
