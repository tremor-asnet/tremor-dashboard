import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderDetailContact from "./OrderDetailContact";

// Mock data
import { ORDER_DETAIL_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderDetailContact",
  component: OrderDetailContact,
  tags: ["autodocs"],
} as Meta<typeof OrderDetailContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <OrderDetailContact order_status="delivered" data={ORDER_DETAIL_DATA} />
  ),
};
