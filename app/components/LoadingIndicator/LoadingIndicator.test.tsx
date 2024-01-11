import { render } from "@testing-library/react";

// Components
import LoadingIndicator from "./LoadingIndicator";

describe("LoadingIndicator component", () => {
  const loadingIndicator = () => {
    return render(<LoadingIndicator width="w-5" height="w-5" />);
  };

  it("Should render LoadingIndicator snapshot correctly", () => {
    expect(loadingIndicator()).toMatchSnapshot();
  });
});
