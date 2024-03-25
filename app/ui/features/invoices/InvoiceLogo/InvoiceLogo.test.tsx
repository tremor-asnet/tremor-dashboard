import { render } from "@testing-library/react";

// Components
import InvoiceLogo from "./InvoiceLogo";

// Themes
import { color } from "@/themes";

describe("InvoiceLogo component", () => {
  const invoiceLogo = () => {
    return render(<InvoiceLogo color={color.black} />);
  };

  it("Should render InvoiceLogo snapshot correctly", () => {
    expect(invoiceLogo()).toMatchSnapshot();
  });

  it("Should render InvoiceLogo and check fill value prop color is red", () => {
    const { container } = render(<InvoiceLogo color="red" />);
    expect(container.querySelector("g")).toBeTruthy();
    const element = document.querySelector("g");
    expect(element?.getAttribute("fill")).toEqual("red");
  });

  it("Should render InvoiceLogo and check fill value prop color is black", () => {
    const { container } = render(<InvoiceLogo color={color.black} />);
    expect(container.querySelector("g")).toBeTruthy();
    const element = document.querySelector("g");
    expect(element?.getAttribute("fill")).toEqual("#000");
  });

  it("Should render InvoiceLogo and check fill value prop color is empty", () => {
    const { container } = render(<InvoiceLogo color="" />);
    expect(container.querySelector("g")).toBeTruthy();
    const element = document.querySelector("g");
    expect(element?.getAttribute("fill")).toEqual("");
  });
});
