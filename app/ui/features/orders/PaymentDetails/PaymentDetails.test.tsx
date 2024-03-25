import { render } from "@testing-library/react";
import PaymentDetails from "./PaymentDetails";

describe("Payment Details Components Testing", () => {
  it("Should match snapshot", () => {
    const result = render(<PaymentDetails cardLast4Digit="7852" />);
    expect(result).toMatchSnapshot();
  });

  it("Should Payment Detail - if with prop cardLast4Digit is 1111 then show text **** **** **** 1111", () => {
    const { getAllByText } = render(<PaymentDetails cardLast4Digit="1111" />);

    expect(getAllByText("**** **** **** 1111")).toHaveLength(1);
  });

  it("Should Payment Detail - if with prop cardLast4Digit is empty then show text **** **** ****", () => {
    const { getAllByText } = render(<PaymentDetails cardLast4Digit="" />);

    expect(getAllByText("**** **** ****")).toHaveLength(1);
  });
});
