import { render, queryAllByAttribute, fireEvent } from "@testing-library/react";

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

  it.skip("renders correct number of options", () => {
    const getById = queryAllByAttribute.bind(null, "id");

    const { container } = render(
      <SelectField label="Currency" options={TYPE_PRICE} name="currency" />,
    );
    const selectElement = getById(container, "currency");
    expect(selectElement[0]?.children).toHaveLength(1);
  });

  it("renders correct name of options", () => {
    const { getAllByText } = render(
      <SelectField label="Currency" options={TYPE_PRICE} value="4" />,
    );
    expect(getAllByText("GBP")).toBeTruthy();
  });

  it("should call onChange handler with selected value", () => {
    const onChangeMock = jest.fn(); // Mock the onChange handler

    const { getByText } = render(
      <SelectField
        label="Test Select"
        options={TYPE_PRICE}
        onChange={onChangeMock}
        name="testSelect"
      />,
    );

    fireEvent.click(getByText("Select..."));
    fireEvent.click(getByText(TYPE_PRICE[2].option));

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(TYPE_PRICE[2].value);
  });
});
