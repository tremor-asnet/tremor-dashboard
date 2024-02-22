import { fireEvent, render } from "@testing-library/react";

// // Components
import DashboardHeader from "./DashboardHeader";

describe("DashboardHeader component", () => {
  const mockFunction = jest.fn();

  const propsDefault = {
    toggleSidebar: mockFunction,
    isCollapseSidebar: true,
  };

  const dashboardHeader = () => {
    return render(
      <DashboardHeader toggleSidebar={() => {}} isCollapseSidebar={false} />,
    );
  };

  it("Should render DashboardHeader snapshot correctly", () => {
    expect(dashboardHeader()).toMatchSnapshot();
  });

  it("should set isScrolled state to true when window is scrolled down", () => {
    Object.defineProperty(window, "scrollY", { value: 100 });

    const { container } = render(<DashboardHeader {...propsDefault} />);

    fireEvent.scroll(window);

    // Check if isScrolled state is true
    const headerElement = container.querySelector(".sticky");
    expect(headerElement).toBeTruthy();
    expect(headerElement!.classList.contains("sticky")).toBe(true);
  });

  it("should set isScrolled state to false when window is scrolled to top", () => {
    Object.defineProperty(window, "scrollY", { value: 0 });

    const { container } = render(<DashboardHeader {...propsDefault} />);

    fireEvent.scroll(window);

    // Check if isScrolled state is false
    expect(container.querySelector(".sticky")).not.toBeTruthy();
  });
});
