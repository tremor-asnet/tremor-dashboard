import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import InvoiceFooter from "./InvoiceFooter";

describe("InvoiceFooter Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<InvoiceFooter />);

    expect(container).toMatchSnapshot();
  });

  it("prints invoice when print button is clicked", () => {
    window.print = jest.fn();

    const { getByRole } = render(<InvoiceFooter />);

    fireEvent.click(
      getByRole("button", {
        name: /print/i,
      }),
    );

    expect(window.print).toHaveBeenCalled();
  });
});
