import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceFooter from "./InvoiceFooter";
import { Card } from "@tremor/react";

const meta = {
  title: "Components/InvoiceFooter",
  component: InvoiceFooter,
  tags: ["autodocs"],
  argTypes: {
    title: { description: "Title thank you of invoice detail footer" },
    contactAt: {
      description:
        "Contact at email if have any issues of invoice detail footer",
    },
    emailContact: { description: "Email support of invoice detail footer" },
    printButton: { description: "Print for invoice detail" },
  },
} as Meta<typeof InvoiceFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue p-6 ring-0 rounded-xl shadow-md">
      <InvoiceFooter />
    </Card>
  ),
};
