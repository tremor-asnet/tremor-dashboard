import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { VARIANT_BUTTON } from "@/constants";

describe("Button Component", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <div>
        <Button variant={VARIANT_BUTTON.PRIMARY}>Hello</Button>
        <Button variant={VARIANT_BUTTON.PRIMARY_CENTER}>Hello</Button>
        <Button variant={VARIANT_BUTTON.SECONDARY}>Hello</Button>
        <Button variant={VARIANT_BUTTON.SECONDARY_SHADOW}>Hello</Button>
        <Button variant={VARIANT_BUTTON.LIGHT}>Hello</Button>
        <Button variant={VARIANT_BUTTON.LIGHT_CARD}>Hello</Button>
        <Button variant={VARIANT_BUTTON.LIGHT_STATUS}>Hello</Button>
        <Button variant={VARIANT_BUTTON.LIGHT_CENTER}>Hello</Button>
        <Button variant={VARIANT_BUTTON.SURFACE}>Hello</Button>
        <Button variant={VARIANT_BUTTON.DARK}>Hello</Button>
        <Button variant={""}>Hello</Button>
      </div>,
    );
    expect(container).toMatchSnapshot();
  });

  it("Calls onClick callback when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);
    fireEvent.click(getByText("Click Me"));
    expect(onClick).toHaveBeenCalled();
  });
});
