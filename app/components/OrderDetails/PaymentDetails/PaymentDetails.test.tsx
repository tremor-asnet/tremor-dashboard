import { render } from "@testing-library/react";
import PaymentDetails from "./PaymentDetails";

describe("Payment Details Components Testing", () => {
  test("Should render correctly", () => {
    const result = render(<PaymentDetails cardLast4Digit="7852" />);
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const result = render(<PaymentDetails cardLast4Digit="7852" />);
    expect(result).toMatchSnapshot();
  });
});
