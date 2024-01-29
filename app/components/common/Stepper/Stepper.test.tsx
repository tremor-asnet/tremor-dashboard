// Libs
import { render } from "@testing-library/react";

// Components
import Stepper from "./Stepper";

describe("Stepper component testing", () => {
  it("should match snapshot", () => {
    const mockSteps = ["Product Info", "Media", "Social", "Pricing"];
    const { container } = render(<Stepper steps={mockSteps} currentStep={2} />);

    expect(container).toMatchSnapshot();
  });
});
