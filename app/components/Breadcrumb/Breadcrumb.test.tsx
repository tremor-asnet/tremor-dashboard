import { render } from "@testing-library/react";

// Components
import Breadcrumb from "./Breadcrumb";

describe("Testing breadcrumb component", () => {
  it("should render correctly with display breadcrumb text", () => {
    const { container } = render(<Breadcrumb />);
    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("dashboards");
  });

  it("Should match snapshot", () => {
    const { container } = render(<Breadcrumb />);
    expect(container).toMatchSnapshot();
  });
});
