import { render } from "@testing-library/react";

// Components
import Select from ".";

describe("Testing Select component", () => {
  it("Should match snapshot", () => {
    const component = render(<Select title="Filter" />);
    expect(component).toMatchSnapshot();
  });
});
