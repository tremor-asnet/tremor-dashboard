// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Invoices from "./InvoiceList";

// Mocks
import { MOCK_INVOICES } from "@/mocks/invoices";

const meta = {
  title: "Components/Billing/InvoiceList",
  tags: ["autodocs"],
  component: Invoices,
} as Meta<typeof Invoices>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InvoiceDefault: Story = {
  args: {
    invoices: MOCK_INVOICES,
  },
};
