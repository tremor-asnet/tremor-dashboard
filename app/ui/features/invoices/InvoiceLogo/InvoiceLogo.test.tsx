import { render } from "@testing-library/react";

// Components
import InvoiceLogo from "./InvoiceLogo";

// Themes
import { color } from "@/themes";

describe("InvoiceLogo component", () => {
  const loadingIndicator = () => {
    return render(<InvoiceLogo color={color.black} />);
  };

  it("Should render InvoiceLogo snapshot correctly", () => {
    expect(loadingIndicator()).toMatchSnapshot();
  });
});
