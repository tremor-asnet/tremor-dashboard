import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

const meta = {
  title: "Components/Tables/TableOrder",
  component: TableOrder,
  tags: ["autodocs"],
} as Meta<typeof TableOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <TableOrder
      orders={MOCK_ORDERS}
      status="status"
      keyword="productName"
      total={10}
      currentPage={0}
    />
  ),
};
