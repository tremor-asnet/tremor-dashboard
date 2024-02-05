import { render } from "@testing-library/react";

// Components
import PricingInfo from "./PricingInfo";

describe("Testing PricingInfo component", () => {
  // TODO: Update unit test later
  it.skip("Should match snapshot", () => {
    const component = render(<PricingInfo />);
    expect(component).toMatchSnapshot();
  });
});
