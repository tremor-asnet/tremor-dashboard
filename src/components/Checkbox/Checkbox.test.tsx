// Libs
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import CheckBox from "./Checkbox";

const handleCheckboxMock = jest.fn();

const CheckboxProps = {
  tabIndex: 3,
  checked: true,
  handleCheckBox: handleCheckboxMock,
};

const CheckboxComponent = () => render(<CheckBox {...CheckboxProps} />);

describe("CheckBox Component", () => {
  test("renders Checkbox component snapshot correctly", () => {
    const { container } = CheckboxComponent();

    expect(container).toMatchSnapshot();
  });

  test("renders CheckBox component with provided props", () => {
    const { getByTestId } = CheckboxComponent();

    const checkBoxInput = getByTestId("checkbox");

    expect(checkBoxInput).toBeInTheDocument();
    expect(checkBoxInput).toBeChecked();

    fireEvent.click(checkBoxInput!);
    expect(handleCheckboxMock).toHaveBeenCalledTimes(1);
  });
});
