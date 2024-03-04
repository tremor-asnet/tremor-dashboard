import { fireEvent, render } from "@testing-library/react";

// Components
import InputSearch from "./InputSearch";

// Mock the necessary modules
jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mocked-path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe("InputSearch component", () => {
  it("should matches snapshot", () => {
    const component = render(<InputSearch field="query" />);
    expect(component).toMatchSnapshot();
  });

  it("renders with initial value", () => {
    const component = render(<InputSearch field="query" />);
    const inputElement = component.getByPlaceholderText("Search...");
    expect(inputElement).toBeTruthy();
  });

  it("updates search value on user input", () => {
    const component = render(<InputSearch field="query" />);
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(inputElement.value).toBe("new value");
  });

  it("clears search value on close button click", () => {
    const component = render(<InputSearch field="query" />);
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    const closeButton = component.getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(inputElement.value).toBe("");
  });
});
