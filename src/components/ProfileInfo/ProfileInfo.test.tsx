import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProfileInfo from "./ProfileInfo";

describe("Testing profile info component", () => {
  const propsDefault = {
    isOnHeader: true,
    name: "Richard Davis",
    info: "CEO / Co-Founder",
    src: "/images/avatar/avatar-lg.webp",
  };

  it("Should render correctly name when isOnHeader is true", () => {
    const { container } = render(<ProfileInfo {...propsDefault} />);
    const profileInfoLg = container.getElementsByClassName("ml-6")[0];

    expect(profileInfoLg.firstChild?.textContent).toEqual("Richard Davis");
  });

  it("Should render correctly name when isOnHeader is false", () => {
    const { container } = render(
      <ProfileInfo {...propsDefault} isOnHeader={false} />,
    );
    const profileInfoMd = screen.getByTestId("profile-info-md");

    expect(profileInfoMd.firstChild).toHaveClass("font-semibold");
  });

  it("Should match snapshot", () => {
    const component = render(<ProfileInfo {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
