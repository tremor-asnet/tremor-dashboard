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
  title: "Components/Billing/Invoices/InvoiceHeader",
  tags: ["autodocs"],
  component: InvoiceHeader,
  argTypes: {
    addressBank: { description: "Address of bank of site" },
    cityBank: { description: "City of bank of site" },
    stateBank: { description: "State of bank of site" },
    phoneBank: { description: "Phone number of site" },
    fullName: { description: "Full name of customer" },
    addressCustomer: { description: "Address of customer" },
    cityCustomer: { description: "City of customer" },
    stateCode: { description: "Code state of customer" },
    stateCustomer: { description: "State of customer" },
  },
} as Meta<typeof InvoiceHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="dark:bg-dark_blue text-primary rounded-xl p-6 shadow-box-icon-default dark:shadow-main-content">
      <InvoiceHeader {...InvoiceHeaderProps} />
    </div>
  ),
};
