import type { Meta, StoryObj } from "@storybook/react";

// Components
import { InvoiceHeader } from ".";
import { Card } from "@tremor/react";

// Mocks
import { mockInvoiceHeader } from "@/mocks/orderDetails";

const meta = {
  title: "Components/InvoiceHeader",
  component: InvoiceHeader,
  tags: ["autodocs"],
} as Meta<typeof InvoiceHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-2/3 dark:bg-dark_blue">
      <InvoiceHeader {...mockInvoiceHeader} />
    </Card>
  ),
};
