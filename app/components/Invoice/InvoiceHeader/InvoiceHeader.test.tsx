import { render } from "@testing-library/react";

// Components
import InvoiceHeader from "./InvoiceHeader";

describe("Testing InvoiceHeader component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<InvoiceHeader />);
    expect(container).toMatchSnapshot();
  });
});
