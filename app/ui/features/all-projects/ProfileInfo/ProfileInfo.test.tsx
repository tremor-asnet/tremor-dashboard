import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProfileInfo from "./ProfileInfo";

// Constants
import { AVATAR_SRC } from "@/constants";

describe("Testing profile info component", () => {
  const propsDefault = {
    name: "Richard Davis",
    role: "CEO / Co-Founder",
    avatarUrl: AVATAR_SRC.lg,
  };

  it("Should match snapshot", () => {
    const component = render(<ProfileInfo {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
