import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import SalesByCountry from "./SalesByCountry";

// Mock data
import { SALES_BY_COUNTRY } from "@/mocks/analytics";

// Constants
import { CHART_SRC } from "@/constants";

describe("Testing analytics sale chart component", () => {
  const propsDefault = {
    title: "Sales by Country",
    chart: CHART_SRC.analytics,
    isAnalytics: true,
    data: SALES_BY_COUNTRY,
  };

  it("testing component analytics sales card render when isAnalytics is false", () => {
    const { container } = render(<SalesByCountry {...propsDefault} />);
    const value = container.getElementsByClassName("value")[0];
    const map = container.getElementsByClassName("map")[0];

    expect(container).toMatchSnapshot();
    expect(value).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

  it("testing component analytics sales card not render when isAnalytics is false", () => {
    const { container } = render(
      <SalesByCountry {...propsDefault} isAnalytics={false} />,
    );
    const value = container.querySelectorAll('[role="value"]');
    const map = container.querySelectorAll('[role="map"]');

    expect(container).toMatchSnapshot();
    expect(value.length).toEqual(0);
    expect(map.length).toEqual(0);
  });

  it("Should match snapshot", () => {
    const component = render(<SalesByCountry {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
