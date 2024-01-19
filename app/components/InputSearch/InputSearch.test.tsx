import { render } from "@testing-library/react";

// Components
import InputSearch from "./InputSearch";

describe("Testing InputSearch component", () => {
  const propsDefault = {
    onSearch: () => {},
  };

  it("Should match snapshot", () => {
    const component = render(<InputSearch {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
