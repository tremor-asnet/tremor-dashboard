import { render } from "@testing-library/react";

// Components
import Avatar from "./Avatar";

// Constants
import { AVATAR_SRC } from "@/constants";

describe("Testing avatar component", () => {
  const propsDefault = {
    alt: "Avatar md",
    className: "shadow-md",
    height: 48,
    priority: true,
    src: AVATAR_SRC.md,
    width: 48,
  };

  it("Should match snapshot", () => {
    const component = render(<Avatar {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
