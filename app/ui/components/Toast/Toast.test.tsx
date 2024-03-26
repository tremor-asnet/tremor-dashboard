import { render, fireEvent } from "@testing-library/react";
import Toast from "./Toast";
import { IoClose } from "react-icons/io5";

describe("Toast Component", () => {
  const onCloseMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("matches the snapshot with default props", () => {
    const { container } = render(
      <Toast Icon={IoClose} message="Default Message" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with custom color", () => {
    const { getByTestId } = render(
      <Toast Icon={IoClose} message="Custom Color Message" color="red" />,
    );

    expect(getByTestId("toast").classList.contains("text-red-500")).toBeTruthy;
  });

  it("calls onClose when close button is clicked", () => {
    const { getByLabelText } = render(
      <Toast
        Icon={IoClose}
        message="Close Button Message"
        onClose={onCloseMock}
      />,
    );

    fireEvent.click(getByLabelText("Close"));

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
