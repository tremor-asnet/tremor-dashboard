import { render } from "@testing-library/react";

// Components
import BreadCrumb from "./BreadCrumb";

// Constants
import { ROUTES } from "@/constants";

describe("Testing breadcrumb component", () => {
  const propsDefault = {
    links: [
      {
        id: "1",
        name: "dashboards",
        url: `${ROUTES.ANALYTICS}`,
      },
    ],
    title: "analytics",
  };

  it("should render correctly with display breadcrumb text", () => {
    const { container } = render(<BreadCrumb {...propsDefault} />);
    const link = container.getElementsByClassName("bc-link")[0];
    expect(propsDefault.links[0].name).toEqual("dashboards");
  });

  it("Should match snapshot", () => {
    const { container } = render(<BreadCrumb {...propsDefault} />);
    expect(container).toMatchSnapshot();
  });
});
