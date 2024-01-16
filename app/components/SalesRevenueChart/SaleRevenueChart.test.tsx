import { render } from "@testing-library/react";

//Components
import SalesRevenueChart from "./SalesRevenueChart";

//Mocks
import { REVENUE_CHART_DATA } from "@/mocks/sales";

describe("Testing SalesRevenueChart component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <SalesRevenueChart
        dataChart={REVENUE_CHART_DATA.data}
        revenueType="Revenue"
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
