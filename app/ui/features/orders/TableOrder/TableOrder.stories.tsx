import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

const meta = {
  title: "Components/Orders/Tables/TableOrder",
  component: TableOrder,
  tags: ["autodocs"],
} as Meta<typeof TableOrder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <TableOrder orders={MOCK_ORDERS} total={10} currentPage={0} />,
};
