import { render } from "@testing-library/react";

// Components
import OrderFilter from ".";

describe("Testing OrderFilter component", () => {
  it("Should match snapshot", () => {
    const component = render(<OrderFilter title="Filter" />);
    expect(component).toMatchSnapshot();
  });
});
