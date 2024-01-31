import { render } from "@testing-library/react";

// Components
import OrderContact from "./OrderContact";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    name: "Leather Wallet",
    url: "https://demos.creative-tim.com/nextjs-material-dashboard-pro//_next/static/media/black-chair.b2719b4f.jpeg",
    date: 18,
  };

  it("Should match snapshot", () => {
    const component = render(<OrderContact {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
