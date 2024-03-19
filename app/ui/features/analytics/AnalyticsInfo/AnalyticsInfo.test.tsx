import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import AnalyticsInfo from "./AnalyticsInfo";

// Mock data
import { ANALYTIC_INFO } from "@/mocks/analytics";

describe("Testing analytics sale chart component", () => {
  it("Should match snapshot", () => {
    const component = render(<AnalyticsInfo infoData={ANALYTIC_INFO[0]} />);
    expect(component).toMatchSnapshot();
  });
});
