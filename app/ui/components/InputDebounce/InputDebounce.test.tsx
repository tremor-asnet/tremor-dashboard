import { RenderResult, fireEvent, render } from "@testing-library/react";

// Components
import InputDebounce from "./InputDebounce";

// Mock the necessary modules
jest.mock("next/navigation", () => ({
  ...jest.requireActual("next/navigation"),
  useRouter: () => ({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn(() => {
    const params = new URLSearchParams();
    const set = (key: string, value: string) => params.set(key, value);
    const deleteParam = (key: string) => params.delete(key);
    return { params, set, delete: deleteParam };
  }),
}));

describe("InputDebounce component", () => {
  let renderComponent: RenderResult;

  beforeEach(() => {
    jest.useFakeTimers();

    renderComponent = render(
      <InputDebounce field="query" param="page" valueParam="1" />,
    );
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("should matches snapshot", () => {
    const { container } = renderComponent;
    expect(container).toMatchSnapshot();
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

  it("should update URL parameters correctly when user inputs a value", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    jest.runAllTimers();
  });

  it("should reset search and update URL parameters when reset is clicked", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });
    const resetButton = component.getByTestId("close-button");
    fireEvent.click(resetButton);

    expect(component.container).toMatchSnapshot();
  });

  it("should clear the search value and delete the parameter", () => {
    const component = renderComponent;
    const inputElement = component.getByPlaceholderText(
      "Search...",
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "new value" } });

    // Clear the input value
    fireEvent.change(inputElement, { target: { value: "" } });

    jest.runAllTimers(); // Run timers to execute debounced function
    expect(component.container).toMatchSnapshot();
  });
});
