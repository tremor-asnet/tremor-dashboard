import { render } from "@testing-library/react";

// Components
import Socials from "./Socials";

const propsDefault = {
  handleSocials: () => {},
};

describe("Testing Order detail contact section", () => {
  it("Should match snapshot", () => {
    const component = render(<Socials {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
