import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProfileInfo from "./ProfileInfo";

describe("Testing profile info component", () => {
  const propsDefault = {
    name: "Richard Davis",
    role: "CEO / Co-Founder",
    avatarUrl: "/images/avatar/avatar-lg.webp",
  };

  it("Should match snapshot", () => {
    const component = render(<ProfileInfo {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
