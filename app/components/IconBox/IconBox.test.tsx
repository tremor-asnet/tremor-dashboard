import { render } from "@testing-library/react";

//Components
import IconBox from "./IconBox";

describe("Testing IconBox component", () => {
  it("Should match snapshot", () => {
    const component = render(<IconBox />);
    expect(component).toMatchSnapshot();
  });
});
