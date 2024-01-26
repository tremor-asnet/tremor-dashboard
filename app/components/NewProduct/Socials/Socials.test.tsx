import { render } from "@testing-library/react";

// Components
import Socials from "./Socials";

describe("Testing Order detail contact section", () => {
  it("Should match snapshot", () => {
    const component = render(<Socials />);
    expect(component).toMatchSnapshot();
  });
});
