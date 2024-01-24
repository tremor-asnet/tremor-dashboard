import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderContact from "./OrderContact";

// Mock data
import { ORDER_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderContact",
  component: OrderContact,
  tags: ["autodocs"],
} as Meta<typeof OrderContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderContact data={ORDER_DATA} />,
};
