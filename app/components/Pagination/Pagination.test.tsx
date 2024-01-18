import { render } from "@testing-library/react";

// Components
import Pagination from "./Pagination";

describe("Testing Pagination component", () => {
  const propsDefault = {
    totalCount: 5,
  };

  it("Should match snapshot", () => {
    const component = render(<Pagination {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
