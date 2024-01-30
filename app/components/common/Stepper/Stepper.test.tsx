// Libs
import { render } from "@testing-library/react";

// Components
import Stepper from "./Stepper";

// Types
import { Step } from "@/types";

describe("Stepper component testing", () => {
  it("should match snapshot", () => {
    const mockSteps: Step[] = [
      { index: 1, content: "Product Info" },
      { index: 2, content: "Media" },
      { index: 3, content: "Social" },
      { index: 4, content: "Pricing" },
    ];
    const { container } = render(
      <Stepper steps={mockSteps} currentStep={2} total={mockSteps.length} />,
    );

    expect(container).toMatchSnapshot();
  });
});
