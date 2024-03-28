import { fireEvent, render } from "@testing-library/react";

// Contexts
import { ThemeContext, ThemeProvider } from "@/context/theme";

// Components
import InvoiceHeader from "./InvoiceHeader";

const InvoiceHeaderProps = {
  addressBank: "123 Bank Street",
  cityBank: "Bucharest",
  stateBank: "Romania",
  phoneBank: "+4 (074) 1090873",
  fullName: "John Doe",
  addressCustomer: "4006 Locust View Drive",
  cityCustomer: "San Francisco",
  stateCode: "CA",
  stateCustomer: "California",
};

describe("InvoiceHeader component", () => {
  it("should render snapshot correctly", () => {
    const { getByTestId, container } = render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ isDarkTheme, toggleTheme }) => (
            <>
              <InvoiceHeader {...InvoiceHeaderProps} />
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

  it("should renders the component with provided props", () => {
    const { getByText } = render(<InvoiceHeader {...InvoiceHeaderProps} />);

    expect(getByText("123 Bank Street Bucharest, Romania")).toBeTruthy();
    expect(getByText("tel: +4 (074) 1090873")).toBeTruthy();
    expect(getByText("Billed to: John Doe")).toBeTruthy();
  });

  it("should correctly renders the combined address information", () => {
    const { getByText } = render(<InvoiceHeader {...InvoiceHeaderProps} />);

    expect(getByText(/4006 Locust View Drive/)).toBeTruthy();
    expect(getByText(/San Francisco CA/)).toBeTruthy();
    expect(getByText(/California/)).toBeTruthy();
  });
});
