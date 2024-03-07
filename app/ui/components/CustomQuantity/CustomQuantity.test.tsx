import { render } from "@testing-library/react";
import CustomQuantity from ".";

const products = [{ id: 1, name: "Product Bar 123", count: 1 }];

const CustomQuantityComponent = () =>
  render(<CustomQuantity products={products} />);

describe("CustomQuantity component", () => {
  it("should render snapshot correctly", () => {
    const { container } = CustomQuantityComponent();

    expect(container).toMatchSnapshot();
  });

  it("should renders list with correct products", () => {
    const { getByText } = CustomQuantityComponent();

    products.forEach(({ count }) => {
      const productCountText = getByText(count.toString());
      expect(productCountText).toBeTruthy();
    });
  });
});
