import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import { OrderSummary } from "./OrderSummary";

// Mocks
import { mockOrderSummary } from "@/mocks/orderDetails";

// Helpers
import { formattedNumber } from "@/helpers";

// Constants
import { CURRENCY } from "@/constants";

describe("Test OderSummary component", () => {
  test("Should render correctly", () => {
    const result = render(<OrderSummary {...mockOrderSummary} />);
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const result = render(<OrderSummary {...mockOrderSummary} />);
    expect(result).toMatchSnapshot();
  });

  test("Should render correct product price", () => {
    render(<OrderSummary {...mockOrderSummary} />);
    const result = screen.getByTestId("productPrice");
    expect(result).toHaveTextContent(
      formattedNumber({
        value: mockOrderSummary.productPrice,
        currency: CURRENCY.DOLLAR,
        isDecimalNumber: true,
      }),
    );
  });

  test("Should render correct delivery fee", () => {
    render(<OrderSummary {...mockOrderSummary} />);
    const result = screen.getByTestId("delivery");
    expect(result).toHaveTextContent(
      formattedNumber({
        value: mockOrderSummary.delivery,
        currency: CURRENCY.DOLLAR,
        isDecimalNumber: true,
      }),
    );
  });

  test("Should render correct taxes", () => {
    render(<OrderSummary {...mockOrderSummary} />);
    const result = screen.getByTestId("taxes");
    expect(result).toHaveTextContent(
      formattedNumber({
        value: mockOrderSummary.taxes,
        currency: CURRENCY.DOLLAR,
        isDecimalNumber: true,
      }),
    );
  });

  test("Should render correct total price", () => {
    render(<OrderSummary {...mockOrderSummary} />);
    const result = screen.getByTestId("total-price");
    const total =
      mockOrderSummary.delivery +
      mockOrderSummary.productPrice +
      mockOrderSummary.taxes;
    expect(result).toHaveTextContent(
      formattedNumber({
        value: total,
        currency: CURRENCY.DOLLAR,
        isDecimalNumber: true,
      }),
    );
  });
});
