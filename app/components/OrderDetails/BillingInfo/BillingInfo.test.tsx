import { render } from "@testing-library/react";

// Components
import BillingInfo from "./BillingInfo";

// Mocks
import { mockBillingInfo } from "@/mocks/orderDetails";

describe("Testing BillingInfo component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<BillingInfo billingData={mockBillingInfo} />);
    expect(container).toMatchSnapshot();
  });
});
