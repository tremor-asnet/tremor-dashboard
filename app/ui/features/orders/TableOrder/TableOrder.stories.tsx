import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

const meta = {
  title: "Components/Orders/Tables/TableOrder",
  component: TableOrder,
  tags: ["autodocs"],
  argTypes: {
    orders: { description: "Order data of table order" },
    total: { description: "Total item of table order" },
    currentPage: { description: "Current page of table order" },
  },
} as Meta<typeof TableOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    orders: MOCK_ORDERS,
    total: 50,
    currentPage: 1,
  },
};
