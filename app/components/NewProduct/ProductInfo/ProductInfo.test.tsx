import { render } from "@testing-library/react";

// Components
import ProductInfo from "./ProductInfo";

describe("Testing ProductInfo component", () => {
  // TODO: Update unit test later
  it.skip("Should match snapshot", () => {
    const component = render(<ProductInfo />);
    expect(component).toMatchSnapshot();
  });
});
