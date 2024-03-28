import { fireEvent, render } from "@testing-library/react";

// Components
import DashboardHeader from "./DashboardHeader";
import { ThemeContext, ThemeProvider } from "@/context/theme";

// Mocking usePathname hook
jest.mock("next/navigation", () => ({
  usePathname: jest
    .fn()
    .mockReturnValueOnce("/all-projects")
    .mockReturnValue("/product-list"),
  useParams: jest.fn().mockReturnValue({}),
}));

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

  it("Should set isScrolled state to true when window is scrolled down", () => {
    Object.defineProperty(window, "scrollY", { value: 100 });

    const { container } = render(<DashboardHeader {...propsDefault} />);

    fireEvent.scroll(window);

    // Check if isScrolled state is true
    const headerElement = container.querySelector(".sticky");
    expect(headerElement).toBeTruthy();
    expect(headerElement!.classList.contains("sticky")).toBe(true);
  });

  it("Should set isScrolled state to false when window is scrolled to top", () => {
    Object.defineProperty(window, "scrollY", { value: 0 });

    const { container } = render(<DashboardHeader {...propsDefault} />);

    const link = container.getElementsByClassName("bc-link")[0];
    expect(link.textContent).toEqual("product list");
    fireEvent.scroll(window);

    // Check if isScrolled state is false
    expect(container.querySelector(".sticky")).not.toBeTruthy();
  });

  it("Should set dark theme is true", () => {
    Object.defineProperty(window, "scrollY", { value: 0 });

    const { getByTestId } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkTheme, toggleTheme }) => (
            <>
              <DashboardHeader {...propsDefault} />
              <button
                data-testid="toggle-theme"
                onClick={() =>
                  toggleTheme()
                }>{`isDarkTheme to ${isDarkTheme}`}</button>
            </>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );

    const themeButton = getByTestId("toggle-theme");

    fireEvent.click(themeButton);
    expect(themeButton.textContent).toBe("isDarkTheme to true");

    fireEvent.click(themeButton);

    expect(themeButton.textContent).toBe("isDarkTheme to false");
  });
});
