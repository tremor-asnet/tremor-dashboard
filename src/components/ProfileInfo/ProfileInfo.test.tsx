import { render } from "@testing-library/react";

// Components
import ProfileInfo from "./ProfileInfo";

describe("Testing profile info component", () => {
  const propsDefault = {
    isOnHeader: true,
    name: "Richard Davis",
    info: "CEO / Co-Founder",
    src: "/images/avatar/avatar-lg.webp",
  };

  it("Should match snapshot", () => {
    const component = render(<ProfileInfo {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
