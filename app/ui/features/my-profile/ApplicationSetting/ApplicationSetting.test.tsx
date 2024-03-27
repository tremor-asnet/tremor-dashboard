import { fireEvent, render, screen } from "@testing-library/react";

// Contexts
import { ThemeContext, ThemeProvider } from "@/context/theme";

// Components
import ApplicationSetting from "./ApplicationSetting";

// Types
import { ApplicationSettingData } from "@/types";

// Constants
import {
  APPLICATION_SETTING_DATA,
  APPLICATION_SETTING_FIELDS,
} from "@/constants";

describe("ApplicationSetting component", () => {
  const props = {
    applicationSettingFields: APPLICATION_SETTING_FIELDS,
    applicationSettingData: APPLICATION_SETTING_DATA,
  };

  const propsEmptyData = {
    applicationSettingFields: [],
    applicationSettingData: {} as ApplicationSettingData,
  };

  it("Should render ApplicationSetting snapshot correctly", () => {
    const { getByTestId, container } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkTheme, toggleTheme }) => (
            <>
              <ApplicationSetting {...props} />
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

  it("Should render ApplicationSetting in case empty data", () => {
    render(<ApplicationSetting {...propsEmptyData} />);

    expect(screen.queryByTestId("application-setting")).toBeNull();
  });
});
