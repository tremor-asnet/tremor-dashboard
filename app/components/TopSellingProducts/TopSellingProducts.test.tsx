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

  it("testing component top selling products render", () => {
    const { container } = render(<TopSellingProducts {...propsDefault} />);
    const name = container.getElementsByClassName("product-name")[0];
    const orders = container.getElementsByClassName("product-orders")[0];
    const value = container.getElementsByClassName("product-value")[0];
    const adSpent = container.getElementsByClassName("product-ads-spent")[0];
    const refunds = container.getElementsByClassName("product-refunds")[0];

    expect(container).toMatchSnapshot();
    expect(name).toBeInTheDocument();
    expect(orders).toBeInTheDocument();
    expect(value).toBeInTheDocument();
    expect(adSpent).toBeInTheDocument();
    expect(refunds).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const component = render(<TopSellingProducts {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
