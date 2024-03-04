// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import BillingDetail from "./BillingDetail";

import { mockBillingCard, mockSalaryData } from "@/mocks/billing";

const meta = {
  title: "Components/Billing/BillingDetail",
  tags: ["autodocs"],
  component: BillingDetail,
  argTypes: {
    cardInfo: {
      expire: { description: "Expire of card info." },
      cardNumber: { description: "Card info number." },
      holderFullName: { description: "Holder full name of card info." },
    },
    aggregation: [
      {
        type: { description: "Type of salary card." },
        value: { description: "Value of salary card." },
      },
    ],
  },
} as Meta<typeof BillingDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BillingDetail cardInfo={mockBillingCard} aggregation={mockSalaryData} />
  ),
};
