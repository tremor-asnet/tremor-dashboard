import { render } from "@testing-library/react";

// Componenents
import ProductInfoDetail from "./ProductInfoDetail";

//Mocks
import { mockProductInfoDetail } from "@/mocks";

describe("ProductInfoDetail Testing", () => {
  it("should match snapshot", () => {
    const component = render(
      <ProductInfoDetail product={mockProductInfoDetail} />,
    );
    expect(component).toMatchSnapshot();
  });
});
