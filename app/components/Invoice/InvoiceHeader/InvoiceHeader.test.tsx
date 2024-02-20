import { render } from "@testing-library/react";

// Components
import InvoiceHeader from "./InvoiceHeader";
import { INVOICE_DATA } from "@/mocks";

describe("Testing InvoiceHeader component", () => {
  it.skip("Should match snapshot", () => {
    const { container } = render(<InvoiceHeader {...INVOICE_DATA} />);
    expect(container).toMatchSnapshot();
  });
});
