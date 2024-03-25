import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import SalesByCountry from "./SalesByCountry";

// Mock data
import { SALES_BY_COUNTRY } from "@/mocks/analytics";

describe("Testing analytics sale chart component", () => {
  const propsDefault = {
    title: "Sales by Country",
    isAnalytics: true,
    data: SALES_BY_COUNTRY,
  };

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
