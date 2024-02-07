import { render } from "@testing-library/react";

// Components
import BillingCard from "./BillingCard";

// Mocks
import { mockBillingCard } from "@/mocks/billing";

describe("Testing BillingCard component", () => {
  it("Should match snapshot", () => {
    const { container } = render(
      <BillingCard billingCardData={mockBillingCard} />,
    );
    expect(container).toMatchSnapshot();
  });
});
