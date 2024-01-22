import { render } from "@testing-library/react";

// Components
import TrackOrder from ".";

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
  test("render TrackOrder component with snapshot correctly", () => {
    const { container } = TrackOrderComponent();

    expect(container).toMatchSnapshot();
  });
});
