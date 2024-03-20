import { render } from "@testing-library/react";
import PaymentDetails from "./PaymentDetails";

describe("Payment Details Components Testing", () => {
  it("Should match snapshot", () => {
    const result = render(<PaymentDetails cardLast4Digit="7852" />);
    expect(result).toMatchSnapshot();
  });
});
