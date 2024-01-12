import { render } from "@testing-library/react";

// Components
import ColumnChart from "./ColumnChart";

// Mocks
import { WEBSITE_CHART } from "@/mocks/analytics";

describe("ColumnChart component", () => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
    }));

  const columnChart = () => {
    return render(<ColumnChart webChartData={WEBSITE_CHART} />);
  };

  it("Should render ColumnChart snapshot correctly", () => {
    expect(columnChart()).toMatchSnapshot();
  });
});
