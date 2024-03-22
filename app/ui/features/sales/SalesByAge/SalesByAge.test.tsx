import { RenderResult, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import SalesByAge from ".";

// Mocks
import { SALES_AGE_CHART } from "@/mocks";

// Types
import { SalesByAgeContainer } from "@/types";

const propsSalesByAge: SalesByAgeContainer = {
  data: SALES_AGE_CHART,
  title: "Sales by Age",
};

const propsNoDataSalesByAge: SalesByAgeContainer = {
  data: [],
  title: "Sales by Age",
};

describe("SalesByAge components", () => {
  let result: RenderResult;
  beforeEach(() => {
    result = render(<SalesByAge {...propsSalesByAge} />);
  });

  it("Should match snapshot", () => {
    expect(result).toMatchSnapshot();
  });

  it("Should show No Data if the data is empty", () => {
    const { getAllByText } = render(<SalesByAge {...propsNoDataSalesByAge} />);

    expect(getAllByText("No data")).toHaveLength(1);
  });
});
