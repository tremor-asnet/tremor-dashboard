import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableInvoiceBody from "./TableInvoiceBody";

// Constants
import { INVOICE_DATA } from "@/mocks";

const meta = {
  title: "Components/TableInvoiceBody",
  component: TableInvoiceBody,
  tags: ["autodocs"],
} as Meta<typeof TableInvoiceBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TableInvoiceBody details={INVOICE_DATA.details} />,
};
