// Components
import { render } from "@testing-library/react";
import OtherProducts from "./OtherProducts";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

describe("Other Products Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<OtherProducts products={MOCK_PRODUCTS} />);
    expect(container).toMatchSnapshot();
  });
});
