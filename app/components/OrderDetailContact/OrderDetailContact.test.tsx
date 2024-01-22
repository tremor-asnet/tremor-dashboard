import { render } from "@testing-library/react";

// Components
import OrderDetailContact from "./OrderDetailContact";

// Mock data
import { ORDER_DATA } from "@/mocks";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    orderStatus: "delivered",
    data: ORDER_DATA,
  };

  it("Should match snapshot", () => {
    const component = render(<OrderDetailContact {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
