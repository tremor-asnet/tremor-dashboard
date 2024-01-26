// Components
import { render } from "@testing-library/react";
import TableProduct from "./TableProduct";

// Types
import { Product } from "@/types";
import { MOCK_PRODUCTS } from "@/mocks";

describe("Order Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<TableProduct products={MOCK_PRODUCTS} />);
    expect(container).toMatchSnapshot();
  });
});
