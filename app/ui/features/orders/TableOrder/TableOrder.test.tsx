// Components
import { render } from "@testing-library/react";
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

describe("Order Table Testing", () => {
  it.skip("should match snapshot", () => {
    const { container } = render(
      <TableOrder
        orders={MOCK_ORDERS}
        status="status"
        keyword="productName"
        total={10}
        currentPage={0}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
