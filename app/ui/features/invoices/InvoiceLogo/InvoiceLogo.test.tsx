import { render, RenderResult } from "@testing-library/react";

// Components
import InvoiceLogo from "./InvoiceLogo";

// Themes
import { color } from "@/themes";

describe("InvoiceLogo component", () => {
  let renderedComponent: RenderResult;

  beforeEach(() => {
    renderedComponent = render(<InvoiceLogo color={color.black} />);
  });

  it("Should matches snapshot", () => {
    const { container } = renderedComponent;
    // Take a snapshot of the rendered component
    expect(container).toMatchSnapshot();
  });

  it("Should render InvoiceLogo and check fill value prop color", () => {
    ["#000", "#ff0000", ""].map(value => {
      const { container } = render(<InvoiceLogo color={value} />);
      const element = container.querySelector("g");
      expect(element).toBeTruthy();
      expect(element?.getAttribute("fill")).toEqual(value);
    });
  });
});
