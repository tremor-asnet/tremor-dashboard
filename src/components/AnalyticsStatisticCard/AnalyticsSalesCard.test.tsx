import { render } from "@testing-library/react";

//Components
import AnalyticsStatisticCard from "./AnalyticsStatisticCard";

//Mocks
import { STATISTICAL_DATA } from "@/mocks/analytics";

describe("Testing AnalyticsStatisticCard component", () => {
  const propsDefault = {
    statisticalData: STATISTICAL_DATA[0],
  };

  // TODO: Will update soon
  it.skip("Should match snapshot", () => {
    const component = render(<AnalyticsStatisticCard {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
