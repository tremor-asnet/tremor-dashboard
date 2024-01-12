import { render } from "@testing-library/react";

// Components
import Sidebar from "./Sidebar";

// Constants
import { ROUTES } from "@/constants";

describe("Sidebar component", () => {
  const mockFunction = jest.fn();

  const propsDefault = {
    avatarUrl: "/images/avatar/avatar-sm.webp",
    name: "Brooklyn Alice",
    pathname: ROUTES.PROJECTS,
    isCollapse: true,
    toggleSidebar: mockFunction,
    onSignOut: mockFunction,
  };

  const sidebar = () => {
    return render(<Sidebar {...propsDefault} />);
  };

  it("Should render Sidebar snapshot correctly", () => {
    expect(sidebar()).toMatchSnapshot();
  });

  it("Should render correctly name with display Sidebar", () => {
    const { getByText } = render(<Sidebar {...propsDefault} />);

    const name = getByText("Brooklyn Alice");

    expect(name).toBeTruthy;
  });
});
