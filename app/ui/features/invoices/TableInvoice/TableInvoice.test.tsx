import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TableInvoice from "./TableInvoice";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mocked-path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe("TableInvoice Component", () => {
  const details = [
    { id: 0, productName: "Product 1", quantity: 2, price: 10 },
    { id: 1, productName: "Product 2", quantity: 1, price: 5 },
  ];
  const totalCost = 25;

  it("should match snapshot", () => {
    const { container } = render(
      <TableInvoice details={details} totalCost={totalCost} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("renders table with correct data", () => {
    const container = render(
      <TableInvoice details={details} totalCost={totalCost} />,
    );

    expect(screen.getByText("Item")).toBeInTheDocument();
    expect(screen.getByText("Qty")).toBeInTheDocument();
    expect(screen.getByText("Rate")).toBeInTheDocument();
    expect(screen.getByText("Amount")).toBeInTheDocument();

    details.forEach(detail => {
      expect(container.getByText(detail.productName)).toBeInTheDocument();
      expect(
        container.getByText(detail.quantity.toString()),
      ).toBeInTheDocument();
    });
  });
});
