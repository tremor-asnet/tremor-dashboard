import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SelectOption from "./SelectOption";

describe("SelectOption", () => {
  const mockData = [
    { option: "Option 1", value: "value1" },
    { option: "Option 2", value: "value2" },
  ];

  const onSelectItemMock = jest.fn();
  const onSelectRemoveMock = jest.fn();

  it("Should render SelectOption snapshot correctly", () => {
    expect(
      <SelectOption
        title="Test Title"
        data={mockData}
        onSelectItem={onSelectItemMock}
        onSelectRemove={onSelectRemoveMock}
      />,
    ).toMatchSnapshot();
  });

  it("calls onSelectItem when an option is clicked", () => {
    const { getByText } = render(
      <SelectOption
        title="Test Title"
        data={mockData}
        onSelectItem={onSelectItemMock}
        onSelectRemove={onSelectRemoveMock}
      />,
    );

    const optionButton = getByText(`Test Title: ${mockData[0].option}`);
    fireEvent.click(optionButton);

    expect(onSelectItemMock).toHaveBeenCalled();
  });

  it("calls onSelectRemove when remove filter button is clicked", () => {
    const { getByText } = render(
      <SelectOption
        title="Test Title"
        data={mockData}
        onSelectItem={onSelectItemMock}
        onSelectRemove={onSelectRemoveMock}
      />,
    );

    const removeButton = getByText("Remove Filter");
    fireEvent.click(removeButton);

    expect(onSelectRemoveMock).toHaveBeenCalled();
  });
});
