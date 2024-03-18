import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import InvoiceBody from "./InvoiceBody";

// Constants
import { INVOICE_DATA } from "@/mocks";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mocked-path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe("InvoiceBody Testing", () => {
  const invoice = {
    id: INVOICE_DATA.id,
    createdAt: INVOICE_DATA.createdAt,
    dueAt: INVOICE_DATA.dueAt,
    products: INVOICE_DATA.products,
    totalCost: INVOICE_DATA.totalCost,
  };
  it("should match snapshot", () => {
    const component = render(<InvoiceBody {...invoice} />);
    expect(component).toMatchSnapshot();
  });

  it("renders invoice body with correct information", () => {
    const { getByText } = render(<InvoiceBody {...invoice} />);

    expect(getByText("#230220")).toBeInTheDocument();
    expect(getByText("03/06/2019")).toBeInTheDocument();
    expect(getByText("03/11/2019")).toBeInTheDocument();
  });

  it("renders table with invoice details", () => {
    const { getByText } = render(<InvoiceBody {...invoice} />);

    expect(getByText(INVOICE_DATA.products[0].productName)).toBeInTheDocument();
    expect(getByText(INVOICE_DATA.products[0].quantity)).toBeInTheDocument();
  });
});
