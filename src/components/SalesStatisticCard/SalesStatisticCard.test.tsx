import { render } from "@testing-library/react";

//Components
import SalesStatisticCard from "./SalesStatisticCard";

//Constans
import { ITEM_ACTION_SALES_DATE } from "@/constants/commons";

//Mocks
import { STATISTICS_DATA } from "@/mocks/sales";

describe("Testing SalesStatisticCard component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <SalesStatisticCard
        statisticsData={STATISTICS_DATA[0]}
        actions={ITEM_ACTION_SALES_DATE}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
