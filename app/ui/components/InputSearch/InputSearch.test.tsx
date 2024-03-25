import { RenderResult, fireEvent, render } from "@testing-library/react";

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
  const mockHandleChange = jest.fn();
  const mockHandleReset = jest.fn();
  let renderComponent: RenderResult;

  beforeEach(() => {
    renderComponent = render(
      <InputSearch
        value="query"
        onChange={mockHandleChange}
        onReset={mockHandleReset}
      />,
    );
  });

  it("should matches snapshot", () => {
    const component = renderComponent;
    expect(component).toMatchSnapshot();
  });

  it("renders with initial value", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText("Search...");
    expect(inputElement).toBeTruthy();
  });

  it("updates search value on user input", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(inputElement.value).toBe("new value");
  });

  it("clears search value on close button click", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    const closeButton = component.getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(inputElement.value).toBe("");
  });
});
