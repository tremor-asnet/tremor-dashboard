import { render } from "@testing-library/react";

// Components
import AnalyticsLineChart, { CHART_CATEGORIES } from "./AnalyticsLineChart";

// Types
import { CHART_TYPE } from "@/constants";

// Mocks
import { LINE_CHART_DATA } from "@/mocks/charts";

describe("Testing AnalyticsLineChart component", () => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));

  const propsDefault = {
    dataChart: LINE_CHART_DATA[1].data,
    type: CHART_TYPE.SALE,
    title: "Daily Sales",
    descValue: "(+15%)",
    subTitle: "increase in today sales.",
    scheduleText: "updated 4 mins ago",
  };

  it("Should match snapshot", () => {
    const { container } = render(
      <AnalyticsLineChart isDailyChart={false} {...propsDefault} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("should render correctly className if type CHART_TYPE.PERFORMANCE", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type={CHART_TYPE.PERFORMANCE}
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={false}
      />,
    );

    const cardElement = getByTestId("card");
    const classNameCard = cardElement.getAttribute("class");

    const value = classNameCard?.includes(
      "bg-[linear-gradient(195deg,rgb(73,163,241),rgb(26,115,232))]",
    );

    expect(value).toBeTruthy;
  });

  it("should render correctly className if type not CHART_TYPE.PERFORMANCE", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type=""
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={false}
      />,
    );

    const cardElement = getByTestId("card");
    const classNameCard = cardElement.getAttribute("class");
    const value = classNameCard?.includes(
      "bg-[linear-gradient(195deg,rgb(102,187,106),rgb(67,160,71))]",
    );

    expect(value).toBeTruthy;
  });

  it("should render correctly categories if type not CHART_TYPE.PERFORMANCE", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type=""
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={false}
      />,
    );

    const lineChart = getByTestId("card");
    const categoriesLineChart = lineChart.getAttribute("name");
    const value = categoriesLineChart?.includes(CHART_CATEGORIES.MOBILE);

    expect(value).toBeTruthy;
  });

  it("should render correctly categories if type CHART_TYPE.PERFORMANCE", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type={CHART_TYPE.PERFORMANCE}
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={false}
      />,
    );

    const lineChart = getByTestId("card");
    const categoriesLineChart = lineChart.getAttribute("name");
    const value = categoriesLineChart?.includes(CHART_CATEGORIES.DESKTOP);

    expect(value).toBeTruthy;
  });

  it("should render correctly span element if isDailyChart true", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type={CHART_TYPE.PERFORMANCE}
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={true}
      />,
    );

    const lineChart = getByTestId("percent");
    const percentLineChart = lineChart.getAttribute("name");
    const value = percentLineChart?.includes("+15%");

    expect(value).toBeTruthy;
  });

  it("should render correctly span element if isDailyChart false", () => {
    const { getByTestId } = render(
      <AnalyticsLineChart
        dataChart={LINE_CHART_DATA[0].data}
        type={CHART_TYPE.PERFORMANCE}
        title="Completed Tasks"
        subTitle={"Last Campaign Performance"}
        scheduleText={"just updated"}
        isDailyChart={true}
      />,
    );

    const lineChart = getByTestId("percent");
    const percentLineChart = lineChart.getAttribute("name");
    const value = percentLineChart?.includes("");

    expect(value).toBeTruthy;
  });
});
