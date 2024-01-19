import { render } from "@testing-library/react";

// Components
import OrderDetailItem from "./OrderDetailItem";

// Mock data
import { ORDER_DATA } from "@/mocks";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    orderDetail: ORDER_DATA[0],
  };

  it("Should match snapshot", () => {
    const component = render(<OrderDetailItem {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
