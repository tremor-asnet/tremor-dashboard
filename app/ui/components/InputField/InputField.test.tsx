import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputField from "./InputField";

const mockProps = {
  id: "test-input-field",
  label: "Test InputField",
};

describe("Test InputField component", () => {
  it("Should match snapshot", () => {
    const { container } = render(<InputField {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("Should render InputField with error message", () => {
    render(<InputField errorMessage="Test error message" {...mockProps} />);
    const error = screen.queryByText(/Test error message/i);
    expect(error).toBeInTheDocument();
  });

  it("should call onChange handler with correct parameters", () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <InputField id="test-input" label="Test Input" onChange={onChangeMock} />,
    );

    const inputElement = getByLabelText("Test Input");

    fireEvent.change(inputElement, { target: { value: "test value" } });

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue("test value");
  });
});
