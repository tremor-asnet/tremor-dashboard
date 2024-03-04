import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceBody from "./InvoiceBody";
import { Card } from "@tremor/react";

// Constants
import { INVOICE_DATA } from "@/mocks";

const meta = {
  title: "Components/Billing/Invoices/InvoiceBody",
  component: InvoiceBody,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of invoice detail body" },
    createdAt: { description: "Create date of invoice detail body" },
    dueAt: { description: "Due date of invoice detail body" },
    products: { description: "Products of invoice detail body" },
    totalCost: { description: "Total cost of invoice detail body" },
  },
} as Meta<typeof InvoiceBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue p-6 ring-0 rounded-xl shadow-md">
      <InvoiceBody
        id={INVOICE_DATA.id}
        createdAt={INVOICE_DATA.createdAt}
        dueAt={INVOICE_DATA.dueAt}
        products={INVOICE_DATA.products}
        totalCost={INVOICE_DATA.totalCost}
      />
    </Card>
  ),
};
