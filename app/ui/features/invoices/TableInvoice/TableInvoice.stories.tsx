import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableInvoice from "./TableInvoice";

// Constants
import { INVOICE_DATA } from "@/mocks";

const meta = {
  title: "Components/Billing/Invoices/TableInvoice",
  component: TableInvoice,
  tags: ["autodocs"],
} as Meta<typeof TableInvoice>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TableInvoice
      details={INVOICE_DATA.products}
      totalCost={INVOICE_DATA.totalCost}
    />
  ),
};
