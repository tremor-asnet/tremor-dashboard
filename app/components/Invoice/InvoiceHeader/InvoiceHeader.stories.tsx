// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceHeader from "./InvoiceHeader";

const meta = {
  title: "Components/Invoice/InvoiceHeader",
  tags: ["autodocs"],
  component: InvoiceHeader,
} as Meta<typeof InvoiceHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InvoiceHeader />,
};
