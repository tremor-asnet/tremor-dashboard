import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TableList from "./TableList";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

describe("Testing table list component", () => {
  const propsDefault = {
    data: TABLE_LIST_DATA,
  };

  it("testing component table list render", () => {
    const { container } = render(<TableList {...propsDefault} />);
    const status = container.getElementsByClassName("order-status")[0];
    const customer = container.getElementsByClassName("order-customer")[0];
    const product = container.getElementsByClassName("order-product")[0];
    const revenue = container.getElementsByClassName("order-revenue")[0];

    expect(container).toMatchSnapshot();
    expect(status).toBeInTheDocument();
    expect(customer).toBeInTheDocument();
    expect(product).toBeInTheDocument();
    expect(revenue).toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const component = render(<TableList {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
