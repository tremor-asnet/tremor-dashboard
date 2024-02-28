import type { Meta, StoryObj } from "@storybook/react";

// Components
import PaymentDetails from "./PaymentDetails";
import { Card } from "@tremor/react";

const meta = {
  title: "Components/PaymentDetails",
  component: PaymentDetails,
  tags: ["autodocs"],
  argTypes: {
    paymentCard: { description: "Product name of payment detail" },
    cardNumber: {
      description: "Card number (include cardLast4Digit) of payment detail",
    },
  },
} as Meta<typeof PaymentDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue px-6 py-7 ring-0 rounded-xl shadow-md">
      <PaymentDetails cardLast4Digit="7852" />
    </Card>
  ),
};
