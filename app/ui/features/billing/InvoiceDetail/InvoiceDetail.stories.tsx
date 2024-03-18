// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceDetail from "./InvoiceDetail";

import { MOCK_INVOICES } from "@/mocks/invoices";

const meta = {
  title: "Components/Billing/InvoiceDetail",
  tags: ["autodocs"],
  component: InvoiceDetail,
  argTypes: {
    invoices: {
      id: { description: "Id of invoice." },
      createdAt: { description: "Created at of invoice." },
      invoicePrefix: { description: "Prefix at of invoice." },
      totalCost: { description: "Total at of invoice." },
    },
  },
} as Meta<typeof InvoiceDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InvoiceDetail invoices={MOCK_INVOICES} />,
};
