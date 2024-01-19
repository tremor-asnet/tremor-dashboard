import { render } from "@testing-library/react";

// Components
import BillingInfo from ".";

// Mocks
import { mockBillingInfo } from "@/mocks/orderDetails";

const props = {
  owner_name: mockBillingInfo.owner_name,
  company_name: mockBillingInfo.company_name,
  email: mockBillingInfo.email,
  vat: mockBillingInfo.vat,
};

describe("Testing BillingInfo component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<BillingInfo {...props} />);
    expect(container).toMatchSnapshot();
  });
});
