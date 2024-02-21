import { fireEvent, render } from "@testing-library/react";

// Constants
import { ROUTES } from "@/constants";

// Component
import { SideBar } from "..";

describe("SideBar component", () => {
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
    return render(<SideBar {...propsDefault} />);
  };

  it("Should render Sidebar snapshot correctly", () => {
    expect(sidebar()).toMatchSnapshot();
  });

  it("Should render correctly name with display Sidebar", () => {
    const { getByText } = render(<SideBar {...propsDefault} />);

    const name = getByText("Brooklyn Alice");

    expect(name).toBeTruthy;
  });

  it("should call toggleSidebar when clicked outside", () => {
    const toggleSidebar = jest.fn();
    const onSignOut = jest.fn();
    const { container } = render(
      <div>
        <div id="outside-element">Outside Element</div>
        <SideBar
          avatarUrl=""
          name=""
          isCollapse={true}
          toggleSidebar={toggleSidebar}
          pathname=""
          onSignOut={onSignOut}
        />
      </div>,
    );

    const outsideElement = container.querySelector("#outside-element");
    fireEvent.mouseDown(outsideElement!);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
