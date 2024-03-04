import { render, fireEvent } from "@testing-library/react";

// Constants
import { TYPE_PRICE } from "@/constants";

// Components
import { SelectField } from "..";

describe("SelectField Component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <SelectField label="Currency" options={TYPE_PRICE} />,
    );
    expect(component).toMatchSnapshot();
  });

  it("renders correct label text", () => {
    const { getByText } = render(
      <SelectField label="Currency" options={TYPE_PRICE} />,
    );

    const label = getByText("Currency");

    expect(label).toBeTruthy;
  });

  it("renders correct number of options", () => {
    const { getByTestId } = render(
      <SelectField
        label="Currency"
        options={TYPE_PRICE}
        dataTestId="currency"
      />,
    );
    const selectElement = getByTestId("select-field");
    expect(selectElement.children).toHaveLength(TYPE_PRICE.length);
  });

  it("renders correct name of options", () => {
    const { getByText } = render(
      <SelectField
        label="Currency"
        options={TYPE_PRICE}
        dataTestId="currency"
      />,
    );
    expect(getByText("GBP")).toBeTruthy();
  });
});
