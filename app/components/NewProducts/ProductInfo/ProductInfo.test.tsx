import { render } from "@testing-library/react";

// Components
import ProductInfo from "./ProductInfo";

describe("Testing ProductInfo component", () => {
  it("Should match snapshot", () => {
    const component = render(<ProductInfo />);
    expect(component).toMatchSnapshot();
  });
});
