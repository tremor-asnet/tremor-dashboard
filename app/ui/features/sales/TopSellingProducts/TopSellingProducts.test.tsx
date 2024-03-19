import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TopSellingProducts from "./TopSellingProducts";

// Mock data
import { TOP_SELLING_PRODUCTS_DATA } from "@/mocks";

describe("Testing analytics sale chart component", () => {
  const propsDefault = {
    title: "Top Selling Products",
    data: TOP_SELLING_PRODUCTS_DATA,
  };

  it("Should match snapshot", () => {
    const component = render(<TopSellingProducts {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
