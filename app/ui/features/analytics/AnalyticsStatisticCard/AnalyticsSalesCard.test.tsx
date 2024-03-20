import { queryByAttribute, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//Components
import AnalyticsStatisticCard from "./AnalyticsStatisticCard";

//Mocks
import { STATISTICAL_DATA } from "@/mocks/analytics";

describe("Testing AnalyticsStatisticCard component", () => {
  const propsDefault = {
    statisticalData: STATISTICAL_DATA[0],
  };

  it("Should match snapshot", () => {
    const component = render(<AnalyticsStatisticCard {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });

  it("Should return null when value of type not belong statisticalData", () => {
    const getByTestId = queryByAttribute.bind("", "id");

    const { container } = render(
      <AnalyticsStatisticCard
        statisticalData={{ ...STATISTICAL_DATA[0], type: "123" }}
      />,
    );

    const selectElement = getByTestId(container, "123");
    expect(selectElement).toBeNull();
  });
});
