import { render } from "@testing-library/react";

//Components
import SalesStatisticCard from "./SalesStatisticCard";

//Mocks
import { STATISTICS_DATA } from "@/mocks/sales";

describe("Testing SalesStatisticCard component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <SalesStatisticCard statisticsData={STATISTICS_DATA[0]} />,
    );
    expect(component).toMatchSnapshot();
  });
});
