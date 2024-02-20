import { render } from "@testing-library/react";

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

describe("Testing InvoiceHeader component", () => {
  it.skip("Should match snapshot", () => {
    const { container } = render(<InvoiceHeader {...InvoiceHeaderProps} />);
    expect(container).toMatchSnapshot();
  });
});
