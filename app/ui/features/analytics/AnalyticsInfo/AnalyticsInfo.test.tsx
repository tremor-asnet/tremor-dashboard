import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import AnalyticsInfo from "./AnalyticsInfo";

// Constants
import { EMPTY_IMAGE } from "@/constants";

// Mock data
import { ANALYTIC_INFO } from "@/mocks/analytics";

describe("Testing analytics sale chart component", () => {
  it("Should match snapshot", () => {
    const component = render(<AnalyticsInfo infoData={ANALYTIC_INFO[0]} />);
    expect(component).toMatchSnapshot();
  });

  it("Should check render AnalyticsInfo with no data", () => {
    const { container } = render(<AnalyticsInfo infoData={[]} />);
    expect(container.querySelector("img")).toBeTruthy();
    const element = container.querySelector("img");
    expect(element?.getAttribute("alt")).toEqual(EMPTY_IMAGE.NO_IMAGE);
  });
});
