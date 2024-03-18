import { render } from "@testing-library/react";

// Components
import CustomQuantity from ".";

// Mocks
import { MOCK_ORDERS } from "@/mocks";

const CustomQuantityComponent = () =>
  render(<CustomQuantity products={MOCK_ORDERS[0].products} />);

describe("CustomQuantity component", () => {
  it("should render snapshot correctly", () => {
    const { container } = CustomQuantityComponent();

    expect(container).toMatchSnapshot();
  });

  it("should renders list with correct products", () => {
    const { getByText } = CustomQuantityComponent();

    MOCK_ORDERS[0].products.forEach(({ count }) => {
      const productCountText = getByText(count.toString());
      expect(productCountText).toBeTruthy();
    });
  });
});
