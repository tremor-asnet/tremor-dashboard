import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import InvoiceFooter from "./InvoiceFooter";

describe("InvoiceFooter Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<InvoiceFooter />);

    expect(container).toMatchSnapshot();
  });

  it("should renders invoice footer with correct content", () => {
    const { getByText } = render(<InvoiceFooter />);

    expect(getByText(/thank you!/i)).toBeInTheDocument();
    expect(
      getByText(
        /if you encounter any issues related to the invoice you can contact us at:/i,
      ),
    ).toBeInTheDocument();
    expect(getByText(/email:/i)).toBeInTheDocument();
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
