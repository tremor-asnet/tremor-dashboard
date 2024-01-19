import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderDetailContact from "./OrderDetailContact";

// Mock data
import { ORDER_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderDetailContact",
  component: OrderDetailContact,
  tags: ["autodocs"],
} as Meta<typeof OrderDetailContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderDetailContact data={ORDER_DATA} />,
};
