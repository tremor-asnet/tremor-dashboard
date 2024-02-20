import { render } from "@testing-library/react";

// Components
import InvoiceLogo from "./InvoiceLogo";

describe("InvoiceLogo component", () => {
  const loadingIndicator = () => {
    return render(<InvoiceLogo width={16} height={16} />);
  };

  it("Should render InvoiceLogo snapshot correctly", () => {
    expect(loadingIndicator()).toMatchSnapshot();
  });
});
