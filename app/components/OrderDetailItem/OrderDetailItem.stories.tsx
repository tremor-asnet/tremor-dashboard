import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderDetailItem from "./OrderDetailItem";

// Mock data
import { ORDER_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderDetailItem",
  component: OrderDetailItem,
  tags: ["autodocs"],
} as Meta<typeof OrderDetailItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderDetailItem orderDetail={ORDER_DATA[0]} />,
};
