import { render } from "@testing-library/react";
import PaymentDetails from ".";

describe("Payment Details Components Testing", () => {
  test("Should render correctly", () => {
    const result = render(<PaymentDetails last4Bank="7852" />);
    expect(result).toBeTruthy();
  });

  test("Should match snapshot", () => {
    const result = render(<PaymentDetails last4Bank="7852" />);
    expect(result).toMatchSnapshot();
  });
});
