import type { Meta, StoryObj } from "@storybook/react";

// Components
import { OrderSummary } from ".";
import { Card } from "@tremor/react";

// Mocks
import { mockOderSummary } from "@/mocks/orderDetails";

const meta = {
  title: "Components/OrderSummary",
  component: OrderSummary,
  tags: ["autodocs"],
} as Meta<typeof OrderSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverDefault: Story = {
  render: () => (
    <Card className="w-2/3 dark:bg-dark_blue">
      <OrderSummary {...mockOderSummary} />
    </Card>
  ),
};
