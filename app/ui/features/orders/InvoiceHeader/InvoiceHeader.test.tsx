import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import { InvoiceHeader } from ".";

// Mocks
import { mockInvoiceHeader } from "@/mocks/orderDetails";

describe("Test InvoiceHeader component", () => {
  test("Should render correctly", () => {
    const result = render(<InvoiceHeader {...mockInvoiceHeader} />);
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const result = render(<InvoiceHeader {...mockInvoiceHeader} />);
    expect(result).toMatchSnapshot();
  });

  test("Should render correct order id", () => {
    render(<InvoiceHeader {...mockInvoiceHeader} />);
    const result = screen.getByText(/241342/);
    expect(result).toBeTruthy();
  });

  test("Should render correct date", () => {
    render(<InvoiceHeader {...mockInvoiceHeader} />);
    const result = screen.getByText(/11.01.2024/);
    expect(result).toBeTruthy();
  });

  test("Should render correct order code", () => {
    render(<InvoiceHeader {...mockInvoiceHeader} />);
    const result = screen.getByText(/KF332/);
    expect(result).toBeTruthy();
  });
});
