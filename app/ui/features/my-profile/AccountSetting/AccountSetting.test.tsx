import { fireEvent, render, screen } from "@testing-library/react";

// Contexts
import { ThemeContext, ThemeProvider } from "@/context/theme";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

describe("AccountSetting component", () => {
  const props = {
    accountSettingFields: ACCOUNT_SETTING_FIELDS,
    accountSettingData: ACCOUNT_SETTING_DATA,
  };

  const propsEmptyData = {
    accountSettingFields: [],
    accountSettingData: {},
  };

  it("Should render AccountSetting snapshot correctly", () => {
    const { getByTestId, container } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkTheme, toggleTheme }) => (
            <>
              <AccountSetting {...props} />
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

    expect(container).toMatchSnapshot();
  });

  it("Should render AccountSetting in case empty data", () => {
    render(<AccountSetting {...propsEmptyData} />);

    expect(screen.queryByTestId("account-setting")).toBeNull();
  });
});
