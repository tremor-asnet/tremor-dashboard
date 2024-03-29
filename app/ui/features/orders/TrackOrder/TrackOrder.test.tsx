import { render } from "@testing-library/react";

// Components
import TrackOrder from "./TrackOrder";

// Mocks
import { mockTrackOrder } from "@/mocks/orderDetails";

const props = {
  id: mockTrackOrder.id,
  generateOrderId: mockTrackOrder.generateOrderId,
  deliveredAt: mockTrackOrder.deliveredAt,
  transmitedToCourierAt: mockTrackOrder.transmitedToCourierAt,
  generateOrderAt: mockTrackOrder.generateOrderAt,
};

const TrackOrderComponent = () => render(<TrackOrder {...props} />);

describe("TrackOrder Component", () => {
  it("render TrackOrder component with snapshot correctly", () => {
    const { container } = TrackOrderComponent();

    expect(container).toMatchSnapshot();
  });
});
