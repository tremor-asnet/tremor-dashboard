import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TableInvoice from "./TableInvoice";

// Mocks
import { INVOICE_DATA } from "@/mocks";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mocked-path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe("TableInvoice Component", () => {
  const { products, totalCost } = INVOICE_DATA;

  const mockProps = {
    details: products,
    totalCost: totalCost,
  };

  it("should match snapshot", () => {
    const { container } = render(<TableInvoice {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it("renders table with correct data", () => {
    const container = render(<TableInvoice {...mockProps} />);

    products.forEach(detail => {
      expect(container.getByText(detail.productName)).toBeInTheDocument();
      expect(
        container.getByText(detail.quantity.toString()),
      ).toBeInTheDocument();
    });
  });
});
