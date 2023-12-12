import { render } from "@testing-library/react";

// Components
import BreadCrumb from "./BreadCrumb";

// Constants
import { ROUTES } from "@/constants";

describe("Testing breadcrumb component", () => {
  it("should render correctly with display breadcrumb text", () => {
    const { container } = render(<BreadCrumb />);
    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("dashboards");
  });

  it("Should match snapshot", () => {
    const { container } = render(<BreadCrumb />);
    expect(container).toMatchSnapshot();
  });
});
