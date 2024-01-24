import { render } from "@testing-library/react";

// Components
import OrderContact from "./OrderContact";

// Mock data
import { ORDER_DATA } from "@/mocks";

describe("Testing Order detail contact section", () => {
  const propsDefault = {
    data: ORDER_DATA,
  };

  it("Should match snapshot", () => {
    const component = render(<OrderContact {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
