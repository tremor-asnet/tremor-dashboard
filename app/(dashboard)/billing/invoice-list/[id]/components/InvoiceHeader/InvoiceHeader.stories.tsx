// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import InvoiceHeader from "./InvoiceHeader";

const InvoiceHeaderProps = {
  addressBank: "St. Independence Embankment, 050105",
  cityBank: "Bucharest",
  stateBank: "Romania",
  phoneBank: "+4 (074) 1090873",
  fullName: "John Doe",
  addressCustomer: "4006 Locust View Drive",
  cityCustomer: "San Francisco",
  stateCode: "CA",
  stateCustomer: "California",
};

const meta = {
  title: "Components/Invoice/InvoiceHeader",
  tags: ["autodocs"],
  component: InvoiceHeader,
} as Meta<typeof InvoiceHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InvoiceHeader {...InvoiceHeaderProps} />,
};
