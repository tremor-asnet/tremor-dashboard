import { render } from "@testing-library/react";

// Components
import Avatar from "./Avatar";

describe("Testing avatar component", () => {
  const propsDefault = {
    alt: "Avatar md",
    className: "shadow-md",
    height: 48,
    priority: true,
    src: "/images/avatar/avatar-md.webp",
    width: 48,
  };

  it("Should match snapshot", () => {
    const component = render(<Avatar {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
