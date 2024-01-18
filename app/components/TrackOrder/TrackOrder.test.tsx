import { render } from "@testing-library/react";

// Components
import TrackOrder from ".";

// Mocks
import { TRACK_ORDER } from "@/mocks/orders";

const TrackOrderProps = {
  id: TRACK_ORDER.ID,
  generateOrderId: TRACK_ORDER.GENERATION_ORDER_ID,
  deliveredAt: TRACK_ORDER.DELIVERED_AT,
  transmitedToCourierAt: TRACK_ORDER.TRANSMITED_TO_COURIER_AT,
  generateOrderAt: TRACK_ORDER.GENERATE_ORDER_AT,
};

const TrackOrderComponent = () => render(<TrackOrder {...TrackOrderProps} />);

describe("TrackOrder Component", () => {
  test("render TrackOrder component with snapshot correctly", () => {
    const { container } = TrackOrderComponent();

    expect(container).toMatchSnapshot();
  });
});
