import { render } from "@testing-library/react";
import ClientRootLayout from "./ClientRootLayout";
import { ThemeContext, ThemeProvider } from "./context/theme";

jest.mock("./context/theme", () => ({
  ...jest.requireActual("./context/theme"),
  useContext: jest.fn().mockReturnValue({ theme: true }),
}));

describe("ClientRootLayout", () => {
  it("matches snapshot with dark theme", () => {
    const theme = false;
    const toggleTheme = jest.fn();

    const value = {
      theme,
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
