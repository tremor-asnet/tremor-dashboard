// Components
import { render } from "@testing-library/react";
import TableProduct from "./TableProduct";

// Types
import { MOCK_PRODUCTS } from "@/mocks";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: () => ({ replace: jest.fn() }),
}));

describe("Order Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <TableProduct products={MOCK_PRODUCTS} total={50} currentPage={0} />,
    );
    expect(container).toMatchSnapshot();
  });
});
