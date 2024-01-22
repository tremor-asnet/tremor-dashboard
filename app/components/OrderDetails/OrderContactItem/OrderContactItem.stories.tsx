import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderContactItem from "./OrderContactItem";

// Mock data
import { ORDER_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderContactItem",
  component: OrderContactItem,
  tags: ["autodocs"],
} as Meta<typeof OrderContactItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderContactItem orderContact={ORDER_DATA[0]} />,
};
