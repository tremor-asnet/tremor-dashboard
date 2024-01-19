import { render } from "@testing-library/react";

// Components
import BillingInfo from ".";

// Mocks
import { mockBillingInfo } from "@/mocks/orderDetails";

const props = {
  ownerName: mockBillingInfo.ownerName,
  companyName: mockBillingInfo.companyName,
  email: mockBillingInfo.email,
  vat: mockBillingInfo.vat,
};

describe("Testing BillingInfo component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<BillingInfo {...props} />);
    expect(container).toMatchSnapshot();
  });
});
