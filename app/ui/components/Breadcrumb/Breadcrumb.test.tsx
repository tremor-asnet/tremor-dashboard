import { render } from "@testing-library/react";

// Components
import Breadcrumb from "./Breadcrumb";

// Mocking usePathname hook
jest.mock("next/navigation", () => ({
  usePathname: jest
    .fn()
    .mockReturnValueOnce("/all-projects")
    .mockReturnValueOnce("/product-list")
    .mockReturnValue("/product-list/87120/edit-product"),
  useParams: jest.fn().mockReturnValue({}),
}));

describe("Testing breadcrumb component", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <Breadcrumb isScrolled={true} pathname={""} />,
    );
    expect(container).toMatchSnapshot();
  });

  it("Should render correctly with display breadcrumb with route projects", () => {
    const { container } = render(
      <Breadcrumb isScrolled={false} pathname={"/all-projects/8024"} />,
    );
    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("all projects/");
  });

  it("Should render correctly with display breadcrumb text", () => {
    const { container } = render(
      <Breadcrumb isScrolled={false} pathname={"/product-list"} />,
    );
    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("product list");
  });

  it("Should render correctly with display breadcrumb more details", () => {
    const { container } = render(
      <Breadcrumb
        isScrolled={false}
        pathname={"/product-list/87120/edit-product"}
      />,
    );
    const link = container.getElementsByClassName("bc-link")[2];
    expect(link.textContent).toEqual("edit product");
  });
});
