import type { Meta, StoryObj } from "@storybook/react";

// Components
import InfoInvoiceBody from "./InfoInvoiceBody";

const meta = {
  title: "Components/InfoInvoiceBody",
  component: InfoInvoiceBody,
  tags: ["autodocs"],
} as Meta<typeof InfoInvoiceBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoInvoiceBodyDefault: Story = {
  render: () => (
    <InfoInvoiceBody id={230220} createdAt="06/03/2019" dueDate="11/03/2019" />
  ),
};
