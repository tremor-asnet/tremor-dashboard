import { render } from "@testing-library/react";

// Components
import ProductInfo from "./";

describe("Testing ProductInfo component", () => {
  it("Should match snapshot", () => {
    const component = render(<ProductInfo />);
    expect(component).toMatchSnapshot();
  });
});
