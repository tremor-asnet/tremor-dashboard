import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import AnalyticsInfo from "./AnalyticsInfo";

// Mock data
import { ANALYTIC_INFO } from "@/mocks/analytics";

describe("Testing analytics sale chart component", () => {
  it("testing component analytics info card render when have data", () => {
    const { container } = render(<AnalyticsInfo infoData={ANALYTIC_INFO[0]} />);
    const info = container.getElementsByClassName("analytics-info")[0];

    expect(container).toMatchSnapshot();
    expect(info).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const component = render(<AnalyticsInfo infoData={ANALYTIC_INFO[0]} />);
    expect(component).toMatchSnapshot();
  });
});
