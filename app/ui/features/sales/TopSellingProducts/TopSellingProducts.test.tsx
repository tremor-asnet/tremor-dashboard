import { RenderResult, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TopSellingProducts from "./TopSellingProducts";

// Mock data
import { TOP_SELLING_PRODUCTS_DATA } from "@/mocks";

const propsDefault = {
  title: "Top Selling Products",
  data: TOP_SELLING_PRODUCTS_DATA,
};

const propsNoDataSellingProduct = {
  title: "Top Selling Products",
  data: [],
};

describe("Testing TopSellingProducts component", () => {
  let result: RenderResult;
  beforeEach(() => {
    result = render(<TopSellingProducts {...propsDefault} />);
  });

  it("Should match snapshot", () => {
    expect(result).toMatchSnapshot();
  });

  it("Should show No Data if the data is empty", () => {
    const { getAllByText } = render(
      <TopSellingProducts {...propsNoDataSellingProduct} />,
    );

    expect(getAllByText("No data")).toHaveLength(1);
  });
});
