import { RenderResult, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import SalesByAge from ".";

// Mocks
import { SALES_AGE_CHART } from "@/mocks";

// Types
import { SalesByAgeProps } from "@/types";

const propsSalesByAge: SalesByAgeProps = {
  data: SALES_AGE_CHART,
  title: "Sales by Age",
};

describe("SalesByAge components", () => {
  let result: RenderResult;
  beforeEach(() => {
    result = render(<SalesByAge {...propsSalesByAge} />);
  });
  test("Should render correctly", () => {
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    expect(result).toMatchSnapshot();
  });

  test("Should render correct title", () => {
    const title = result.getByText(/Sales by Age/);
    expect(title).toBeInTheDocument();
  });
});
