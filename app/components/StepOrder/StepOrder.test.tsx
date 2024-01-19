import { render } from "@testing-library/react";

// Components
import StepOrder from "../StepOrder";

// Icons
import { IoMdCheckmark } from "react-icons/io";

const StepOrderProps = {
  backgroundColor: "bg-few",
  iconInfo: <IoMdCheckmark />,
  titleInfo: "Order delivered",
};

const StepOrderComponent = () => render(<StepOrder {...StepOrderProps} />);

describe("StepOrder Component", () => {
  test("render StepOrder component with snapshot correctly", () => {
    const { container } = StepOrderComponent();

    expect(container).toMatchSnapshot();
  });
});
