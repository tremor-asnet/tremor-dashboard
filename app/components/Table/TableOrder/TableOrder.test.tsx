// Components
import { render } from "@testing-library/react";
import TableOrder from "./TableOrder";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

describe("Order Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <TableOrder orders={MOCK_ORDERS} status="status" keyword="productName" />,
    );
    expect(container).toMatchSnapshot();
  });
});
