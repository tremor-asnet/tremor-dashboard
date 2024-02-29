import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@tremor/react";

// Components
import InfoInvoiceBody from "./InfoInvoiceBody";

const meta = {
  title: "Components/InfoInvoiceBody",
  component: InfoInvoiceBody,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of invoice detail body" },
    createdAt: { description: "Create date of invoice detail body" },
    dueAt: { description: "Due date of invoice detail body" },
  },
} as Meta<typeof InfoInvoiceBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoInvoiceBodyDefault: Story = {
  render: () => (
    <Card className="w-full dark:bg-dark_blue p-6 ring-0 rounded-xl shadow-md">
      <InfoInvoiceBody id={230220} createdAt="06/03/2019" dueAt="11/03/2019" />
    </Card>
  ),
};
