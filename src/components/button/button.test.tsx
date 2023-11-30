import { render } from "@testing-library/react";

// Components
import { Button } from "./button";

describe("Button Component", () => {
  test("Should match snapshot", () => {
    const comp = render(<Button />);
    expect(comp).toMatchSnapshot();
  });
});
