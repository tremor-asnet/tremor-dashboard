import { render, fireEvent, queryByAttribute } from "@testing-library/react";

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
    const getById = queryByAttribute.bind(null, "id");

    const { container } = render(
      <SelectField label="Currency" options={TYPE_PRICE} name="category" />,
    );
    const selectElement = getById(container, "category");
    expect(selectElement?.children).toHaveLength(TYPE_PRICE.length);
  });

  it("renders correct name of options", () => {
    const { getByText } = render(
      <SelectField label="Currency" options={TYPE_PRICE} />,
    );
    expect(getByText("GBP")).toBeTruthy();
  });
});
