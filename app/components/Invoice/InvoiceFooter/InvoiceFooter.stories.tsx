import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceFooter from "./InvoiceFooter";

const meta = {
  title: "Components/InvoiceFooter",
  component: InvoiceFooter,
  tags: ["autodocs"],
} as Meta<typeof InvoiceFooter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InvoiceFooter />,
};
