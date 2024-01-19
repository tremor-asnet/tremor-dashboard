// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import BillingInfo from ".";

// Mocks
import { mockBillingInfo } from "@/mocks/orderDetails";

const meta = {
  title: "Components/BillingInfo",
  tags: ["autodocs"],
  component: BillingInfo,
} as Meta<typeof BillingInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <BillingInfo
      owner_name={mockBillingInfo.owner_name}
      company_name={mockBillingInfo.company_name}
      email={mockBillingInfo.email}
      vat={mockBillingInfo.vat}
    />
  ),
};
