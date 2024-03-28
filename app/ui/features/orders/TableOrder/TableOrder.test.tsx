import { render } from "@testing-library/react";

// Components
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

jest.mock("next/navigation", () => ({
  useSearchParams: jest.fn(),
  usePathname: jest.fn(),
  useRouter: () => ({ replace: jest.fn() }),
}));

describe("Order Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <TableOrder orders={MOCK_ORDERS} total={10} currentPage={0} />,
    );
    expect(container).toMatchSnapshot();
  });
});
