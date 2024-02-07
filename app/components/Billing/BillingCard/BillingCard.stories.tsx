// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import BillingCard from "./BillingCard";

const meta = {
  title: "Components/BillingCard",
  tags: ["autodocs"],
  component: BillingCard,
} as Meta<typeof BillingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BillingCard
      cardNumber="4562 1122 4594 7852"
      holderFullName="Jack Peterson"
      expire="11/24"
    />
  ),
};
