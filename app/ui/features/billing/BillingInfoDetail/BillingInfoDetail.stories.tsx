// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import BillingInfoDetail from "./BillingInfoDetail";

import { mockBilling } from "@/mocks/orderDetails";

const meta = {
  title: "Components/Billing/BillingInfoDetail",
  tags: ["autodocs"],
  component: BillingInfoDetail,
  argTypes: {
    billingInfos: {
      email: { description: "Email of billing info." },
      ownerName: { description: "Owner name of billing info." },
      vat: { description: "VAT number of billing info." },
      companyName: { description: "Company name of billing info." },
    },
  },
} as Meta<typeof BillingInfoDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <BillingInfoDetail billingInfos={mockBilling} />,
};
