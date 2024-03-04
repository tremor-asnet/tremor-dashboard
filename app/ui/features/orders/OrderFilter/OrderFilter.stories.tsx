// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderFilter from "../OrderFilter";

const meta = {
  title: "Components/Orders/OrderFilter",
  tags: ["autodocs"],
  component: OrderFilter,
  argTypes: {
    statusFilter: { description: "Status of order filter" },
    removeFilter: { description: "Return back default status of order list" },
  },
} as Meta<typeof OrderFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="relative text-right bg-body dark:bg-dark-primary p-6 rounded-xl">
      <OrderFilter title="Filter" />
    </div>
  ),
};
