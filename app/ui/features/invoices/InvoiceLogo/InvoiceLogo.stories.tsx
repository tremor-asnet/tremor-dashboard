import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceLogo from "./InvoiceLogo";
import { color } from "@/themes";

const meta = {
  title: "Components/Billing/Invoices/InvoiceLogo",
  component: InvoiceLogo,
  tags: ["autodocs"],
  argTypes: {
    width: { description: "Width of logo site" },
    height: { description: "Height of logo site" },
  },
} as Meta<typeof InvoiceLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InvoiceLogoDefault: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <InvoiceLogo color={color.black} />
    </div>
  ),
};
