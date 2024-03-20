import { render } from "@testing-library/react";

// Components
import Checkbox from ".";

describe("Checkbox Testing", () => {
  it("should match snapshot", () => {
    const component = render(<Checkbox onChange={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
