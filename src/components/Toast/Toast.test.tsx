// Libs
import { cleanup, render, screen } from "@testing-library/react";

// Components
import Toast from "./Toast";

const setup = () => {
  const props = {
    content: "Create account successfully.",
  };

  return render(<Toast data-testid="toast" {...props} />);
};

describe("Toast component render", () => {
  afterEach(cleanup);

  test("should render Toast component correctly", () => {
    setup();

    const toast = screen.getByTestId("toast");

    expect(toast).toMatchSnapshot();
  });
});
