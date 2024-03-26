// Libs
import { render, fireEvent } from "@testing-library/react";

// Contexts
import { ThemeProvider, ThemeContext } from "@/context/theme";

// Mocks
import { mockLocalStorage } from "@/mocks/localStorage";

describe("Test ThemeContext, ThemeProvider", () => {
  const setupRender = () => {
    return render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ toggleTheme, isDarkTheme }) => (
            <button data-testid="toggle-theme" onClick={() => toggleTheme()}>
              {`If Toggle Theme then will change isDarkTheme to ${isDarkTheme}`}
            </button>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>,
    );
  };

  it("should test click toggleTheme - if isDarkTheme is false/true then isDarkTheme change to true/false", () => {
    mockLocalStorage.setItem("isDarkTheme", JSON.stringify(true));

    const { getByTestId } = setupRender();
    const themeButton = getByTestId("toggle-theme");

    fireEvent.click(themeButton);

    expect(themeButton.textContent).toBe(
      "If Toggle Theme then will change isDarkTheme to false",
    );

    fireEvent.click(themeButton);

    expect(themeButton.textContent).toBe(
      "If Toggle Theme then will change isDarkTheme to true",
    );

    mockLocalStorage.removeItem("isDarkTheme");
    mockLocalStorage.clear();
  });
});
