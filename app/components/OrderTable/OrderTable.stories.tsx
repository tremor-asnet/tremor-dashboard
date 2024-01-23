import type { Meta, StoryObj } from "@storybook/react";

// Components
import OrderTable from ".";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

const meta = {
  title: "Components/OrderTable",
  component: OrderTable,
  tags: ["autodocs"],
} as Meta<typeof OrderTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <OrderTable data={TABLE_LIST_DATA} />,
};
