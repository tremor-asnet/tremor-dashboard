import { render } from "@testing-library/react";

// Constants
import { TYPE_PRICE } from "@/constants";

// Components
import { SelectField } from "..";

describe("Testing SalesRevenueChart component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <SelectField label="Currency" options={TYPE_PRICE} />,
    );
    expect(component).toMatchSnapshot();
  });
});
