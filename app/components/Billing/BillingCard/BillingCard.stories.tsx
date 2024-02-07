// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import BillingCard from "./BillingCard";

// Mocks
import { mockBillingCard } from "@/mocks/billing";

const meta = {
  title: "Components/BillingCard",
  tags: ["autodocs"],
  component: BillingCard,
} as Meta<typeof BillingCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BillingCard billingCardData={mockBillingCard} />,
};
