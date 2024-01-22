import { render } from "@testing-library/react";

// Components
import OrderContactItem from "./OrderContactItem";

// Mock data
import { ORDER_DATA } from "@/mocks";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    orderContact: ORDER_DATA[0],
  };

  it("Should match snapshot", () => {
    const component = render(<OrderContactItem {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
