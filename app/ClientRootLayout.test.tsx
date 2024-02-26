import { render } from "@testing-library/react";
import ClientRootLayout from "./ClientRootLayout";
import { ThemeContext } from "./context/theme";

jest.mock("./context/theme", () => ({
  ...jest.requireActual("./context/theme"),
  useContext: jest.fn().mockReturnValue({ theme: true }),
}));

describe("ClientRootLayout", () => {
  it("matches snapshot with dark theme", () => {
    const isDarkTheme = false;
    const toggleTheme = jest.fn();

    const value = {
      isDarkTheme,
      toggleTheme,
    };

    const { asFragment } = render(
      <ThemeContext.Provider value={value}>
        <ClientRootLayout>
          <div>Tremor Dashboard</div>
        </ClientRootLayout>
      </ThemeContext.Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
