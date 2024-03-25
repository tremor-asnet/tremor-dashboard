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

  it("renders invoice body with default data show text Result Not Found", () => {
    const { getAllByText } = render(<InvoiceBody />);

    expect(getAllByText("Result Not Found")).toHaveLength(1);
  });
});
