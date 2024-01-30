import { render } from "@testing-library/react";

// Components
import PricingInfo from "./PricingInfo";

describe("Testing PricingInfo component", () => {
  it("Should match snapshot", () => {
    const component = render(<PricingInfo />);
    expect(component).toMatchSnapshot();
  });
});
