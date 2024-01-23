import type { Meta, StoryObj } from "@storybook/react";

// Components
import PaymentDetails from "./PaymentDetails";

const meta = {
  title: "Components/PaymentDetails",
  component: PaymentDetails,
  tags: ["autodocs"],
} as Meta<typeof PaymentDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PopoverDefault: Story = {
  render: () => <PaymentDetails cardLast4Digit="7852" />,
};
