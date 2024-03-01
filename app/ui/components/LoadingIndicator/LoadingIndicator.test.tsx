import { render } from "@testing-library/react";

// Components
import LoadingIndicator from "./LoadingIndicator";

describe("LoadingIndicator component", () => {
  const loadingIndicator = () => {
    return render(<LoadingIndicator width={10} height={10} />);
  };

  it("Should render LoadingIndicator snapshot correctly", () => {
    expect(loadingIndicator()).toMatchSnapshot();
  });
});
