import { render } from "@testing-library/react";

// Components
import ProductImage from "./ProductImage";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    name: "Minimal Bar Stool 3",
    desc: `The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to “Naviglio” where you can enjoy the main night life in Barcelona.`,
    image:
      "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/product-11.b01b2346.jpg",
  };

  it("Should match snapshot", () => {
    const component = render(<ProductImage {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
