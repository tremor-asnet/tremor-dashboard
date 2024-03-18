import { render } from "@testing-library/react";

// Components
import Breadcrumb from "./Breadcrumb";

const mockProps = {
  isScrolled: false,
  pathname: "/analytics",
};

describe("Testing breadcrumb component", () => {
  it("should render correctly with display breadcrumb text", () => {
    const { container } = render(<Breadcrumb {...mockProps} />);
    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("analytics");
  });

  it("Should match snapshot", () => {
    const { container } = render(<Breadcrumb {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
