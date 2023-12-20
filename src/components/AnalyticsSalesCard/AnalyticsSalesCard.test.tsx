import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import AnalyticsSalesCard from "./AnalyticsSalesCard";

// Mock data
import { ANALYTIC_SALES_CARD } from "@/mocks/analytics";

describe("Testing analytics sale chart component", () => {
  const propsDefault = {
    title: "Sales by Country",
    chart: "/assets/images/analytics/analytics-sales-chart.webp",
    isAnalytics: true,
    data: ANALYTIC_SALES_CARD,
  };

  it("testing component analytics sales card render when isAnalytics is false", () => {
    const { container } = render(<AnalyticsSalesCard {...propsDefault} />);
    const value = container.getElementsByClassName("analytics-value")[0];
    const map = container.getElementsByClassName("analytics-map")[0];

    expect(container).toMatchSnapshot();
    expect(value).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

  it("testing component analytics sales card not render when isAnalytics is false", () => {
    const { container } = render(
      <AnalyticsSalesCard {...propsDefault} isAnalytics={false} />,
    );
    const value = container.querySelectorAll('[role="analytics-value"]');
    const map = container.querySelectorAll('[role="analytics-map"]');

    expect(container).toMatchSnapshot();
    expect(value.length).toEqual(0);
    expect(map.length).toEqual(0);
  });

  it("Should match snapshot", () => {
    const component = render(<AnalyticsSalesCard {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
