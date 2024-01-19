import { render } from "@testing-library/react";

// Components
import TrackOrder from ".";

// Mocks
import { mockTrackOrder } from "@/mocks/orderDetails";

const TrackOrderProps = {
  data: mockTrackOrder,
  deliveredAt: "27 , JAN",
  descriptionInfo: "Order Deliver",
};

const TrackOrderComponent = () => render(<TrackOrder {...TrackOrderProps} />);

describe("TrackOrder Component", () => {
  test("render TrackOrder component with snapshot correctly", () => {
    const { container } = TrackOrderComponent();

    expect(container).toMatchSnapshot();
  });
});
