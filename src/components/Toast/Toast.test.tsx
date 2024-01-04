// Libs
import { fireEvent, render } from "@testing-library/react";

// Components
import Toast from "./Toast";

// Constants
import { SIGN_UP_MESSAGE } from "@/constants";

const handleCloseToast = jest.fn();
const ToastProps = {
  message: SIGN_UP_MESSAGE.SUCCESS,
  onClose: handleCloseToast,
};

const ToastComponent = () => render(<Toast {...ToastProps} />);

describe("Toast component", () => {
  test("should render Toast component snapshot correctly", () => {
    const { container } = ToastComponent();

    expect(container).toMatchSnapshot();
  });

  test("calls onClose when close button is clicked", () => {
    const { getByTestId } = ToastComponent();

    const closeButton = getByTestId("toast");
    fireEvent.click(closeButton);

    expect(handleCloseToast).toHaveBeenCalledTimes(0);
  });
});
