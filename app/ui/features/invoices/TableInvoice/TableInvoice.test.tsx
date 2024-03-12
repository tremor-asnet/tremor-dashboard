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
  it("should match snapshot", () => {
    const { container } = render(
      <TableInvoice
        details={INVOICE_DATA.products}
        totalCost={INVOICE_DATA.totalCost}
      />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders table with correct data", () => {
    const container = render(
      <TableInvoice
        details={INVOICE_DATA.products}
        totalCost={INVOICE_DATA.totalCost}
      />,
    );

    INVOICE_DATA.products.forEach(detail => {
      expect(container.getByText(detail.productName)).toBeInTheDocument();
      expect(
        container.getByText(detail.quantity.toString()),
      ).toBeInTheDocument();
    });
  });
});
