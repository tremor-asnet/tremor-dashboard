import { render } from "@testing-library/react";

// Components
import InputSearch from "./InputSearch";

describe("Testing InputSearch component", () => {
  it("Should match snapshot", () => {
    const component = render(<InputSearch onChange={() => {}} />);
    expect(component).toMatchSnapshot();
  });
});
