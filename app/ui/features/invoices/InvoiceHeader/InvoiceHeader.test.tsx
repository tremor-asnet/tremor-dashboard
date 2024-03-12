import { render } from "@testing-library/react";

// Components
import InvoiceHeader from "./InvoiceHeader";

const InvoiceHeaderProps = {
  addressBank: "123 Bank Street",
  cityBank: "Bucharest",
  stateBank: "Romania",
  phoneBank: "+4 (074) 1090873",
  fullName: "John Doe",
  addressCustomer: "4006 Locust View Drive",
  cityCustomer: "San Francisco",
  stateCode: "CA",
  stateCustomer: "California",
};

describe("InvoiceHeader component", () => {
  it("should render snapshot correctly", () => {
    const { container } = render(<InvoiceHeader {...InvoiceHeaderProps} />);
    expect(container).toMatchSnapshot();
  });

  it("should renders the component with provided props", () => {
    const { getByText } = render(<InvoiceHeader {...InvoiceHeaderProps} />);

    expect(getByText("123 Bank Street Bucharest, Romania")).toBeTruthy();
    expect(getByText("tel: +4 (074) 1090873")).toBeTruthy();
    expect(getByText("Billed to: John Doe")).toBeTruthy();
  });

  it("should correctly renders the combined address information", () => {
    const { getByText } = render(<InvoiceHeader {...InvoiceHeaderProps} />);

    expect(getByText(/4006 Locust View Drive/)).toBeTruthy();
    expect(getByText(/San Francisco CA/)).toBeTruthy();
    expect(getByText(/California/)).toBeTruthy();
  });
});
