import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceBody from "./InvoiceBody";

// Constants
import { INVOICE_DATA } from "@/mocks";

const meta = {
  title: "Components/InvoiceBody",
  component: InvoiceBody,
  tags: ["autodocs"],
} as Meta<typeof InvoiceBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <InvoiceBody
      id={INVOICE_DATA.id}
      createdAt={INVOICE_DATA.createdAt}
      dueAt={INVOICE_DATA.dueAt}
      products={INVOICE_DATA.products}
      totalCost={INVOICE_DATA.totalCost}
    />
  ),
};
