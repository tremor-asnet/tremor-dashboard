import { render } from "@testing-library/react";

// Components
import BillingCard from "./BillingCard";

describe("Testing BillingCard component", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <BillingCard
        cardNumber="4562 1122 4594 7852"
        holderFullName="Jack Peterson"
        expires="11/22"
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
