import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import { OrderSummary } from ".";

// Mocks
import { mockOderSummary } from "@/mocks/orderDetails";

describe("Test OderSummary component", () => {
  test("Should render correctly", () => {
    const result = render(<OrderSummary {...mockOderSummary} />);
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const result = render(<OrderSummary {...mockOderSummary} />);
    expect(result).toMatchSnapshot();
  });

  test("Should render correct product price", () => {
    render(<OrderSummary {...mockOderSummary} />);
    const result = screen.getByText(
      (_, element) => element?.textContent === "$90",
    );
    expect(result).toBeTruthy();
  });

  test("Should render correct delivery fee", () => {
    render(<OrderSummary {...mockOderSummary} />);
    const result = screen.getByText(
      (_, element) => element?.textContent === "$14",
    );
    expect(result).toBeTruthy();
  });

  test("Should render correct taxes", () => {
    render(<OrderSummary {...mockOderSummary} />);
    const result = screen.getByText(
      (_, element) => element?.textContent === "$1.95",
    );
    expect(result).toBeTruthy();
  });

  test("Should render correct total price", () => {
    render(<OrderSummary {...mockOderSummary} />);
    const result = screen.getByText(
      (_, element) => element?.textContent === "$105.95",
    );
    expect(result).toBeTruthy();
  });
});
