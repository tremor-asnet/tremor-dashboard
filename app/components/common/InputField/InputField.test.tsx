import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputField from "./InputField";

const mockProps = {
  id: "test-input-field",
  label: "Test InputField",
};

describe("Test InputField component", () => {
  test("Should match snapshot", () => {
    const { container } = render(<InputField {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  test("Should render label correctly", () => {
    render(<InputField {...mockProps} />);
    const label = screen.queryByText(/Test InputField/i);
    expect(label).toBeInTheDocument();
  });

  test("Should render InputField with error message", () => {
    render(<InputField errorMessage="Test error message" {...mockProps} />);
    const error = screen.queryByText(/Test error message/i);
    expect(error).toBeInTheDocument();
  });
});
