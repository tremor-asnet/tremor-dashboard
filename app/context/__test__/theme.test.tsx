// Libs
import { render, fireEvent, screen } from "@testing-library/react";

// Contexts
import { ThemeProvider } from "@/context/theme";

// Components
import { DashboardHeader } from "@/ui/components";

describe("Test ThemeContext, ThemeProvider", () => {
  const setupRender = () => {
    return render(
      <ThemeProvider>
        <DashboardHeader toggleSidebar={() => {}} isCollapseSidebar={false} />
      </ThemeProvider>,
    );
  };
  it("should test toggleTheme - if isDarkTheme in ThemeContext set false then isDarkTheme change to true", () => {
    setupRender();

    localStorage.setItem("isDarkTheme", JSON.stringify(false));

    const toggleThemeButton = screen.getByTestId("toggle-theme");
    fireEvent.click(toggleThemeButton);

    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme")!);
    expect(isDarkTheme).toEqual(true);
  });

  it("should test toggleTheme - if isDarkTheme in ThemeContext set true then isDarkTheme change to false", () => {
    setupRender();

    localStorage.setItem("isDarkTheme", JSON.stringify(true));

    const toggleThemeButton = screen.getByTestId("toggle-theme");
    fireEvent.click(toggleThemeButton);

    const isDarkTheme = JSON.parse(localStorage.getItem("isDarkTheme")!);
    expect(isDarkTheme).toEqual(false);
  });
});
