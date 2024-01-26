import { render } from "@testing-library/react";

// Components
import Media from "./Media";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    name: "Gold Glasses",
    url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-12.0b55635d.jpg",
    path: "product-12.0b55635d.jpg",
    size: "71.4",
    isUploaded: false,
  };

  it("Should match snapshot", () => {
    const component = render(<Media {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
