import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import CustomList from "./";

describe("InvoiceFooter Testing", () => {
  const products = [{ id: 1, name: "Product A", count: 1 }];
  it("should match snapshot", () => {
    const { container } = render(<CustomList products={products} />);

    expect(container).toMatchSnapshot();
  });

  it("should renders list with correct products", () => {
    const { getByText } = render(<CustomList products={products} />);

    products.forEach(product => {
      expect(getByText(product.name)).toBeInTheDocument();
    });
  });
});
