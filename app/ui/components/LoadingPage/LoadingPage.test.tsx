import { render } from "@testing-library/react";

// Components
import LoadingPage from "./LoadingPage";

describe("LoadingPage component", () => {
  const loadingPage = () => {
    return render(<LoadingPage width={10} height={10} />);
  };

  it("Should render LoadingPage snapshot correctly", () => {
    expect(loadingPage()).toMatchSnapshot();
  });
});
