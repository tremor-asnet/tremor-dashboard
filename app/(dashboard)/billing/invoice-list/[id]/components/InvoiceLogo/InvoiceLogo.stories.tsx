import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceLogo from "./InvoiceLogo";

const meta = {
  title: "Components/InvoiceLogo",
  component: InvoiceLogo,
  tags: ["autodocs"],
} as Meta<typeof InvoiceLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InvoiceLogoDefault: Story = {
  render: () => <InvoiceLogo width={16} height={16} />,
};
