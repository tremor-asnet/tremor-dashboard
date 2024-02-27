import { fireEvent, render } from "@testing-library/react";

// Constants
import { ROUTES } from "@/constants";

// Component
import Sidebar from "./Sidebar";

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

  it("should call toggleSidebar when clicked outside", () => {
    const toggleSidebar = jest.fn();
    const onSignOut = jest.fn();
    const { container } = render(
      <div>
        <div id="outside-element">Outside Element</div>
        <Sidebar
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

  // Mock window.innerWidth
  const originalInnerWidth = window.innerWidth;
  beforeAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800, // Set a value greater than BREAKPOINTS === 1280
    });
  });

  it("closes sidebar when window width is smaller than or equal to BREAKPOINTS === 1280", () => {
    const toggleSidebar = jest.fn();

    const { container } = render(
      <Sidebar
        avatarUrl=""
        name=""
        isCollapse={true}
        toggleSidebar={toggleSidebar}
        pathname=""
        onSignOut={() => Promise.resolve()}
      />,
    );

    const sidebar = container.querySelector(".sidebar");
    fireEvent.click(sidebar!);

    expect(toggleSidebar).toHaveBeenCalledTimes(0);
  });

  // Restore window.innerWidth
  afterAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });
});
