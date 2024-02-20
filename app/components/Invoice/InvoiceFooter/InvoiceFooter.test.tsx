import { render } from "@testing-library/react";

// Components
import InvoiceFooter from "./InvoiceFooter";

describe("InvoiceFooter Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<InvoiceFooter />);

    expect(container).toMatchSnapshot();
  });
});
