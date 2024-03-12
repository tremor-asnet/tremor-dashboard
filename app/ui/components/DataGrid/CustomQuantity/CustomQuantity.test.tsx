import { render } from "@testing-library/react";

// Components
import CustomQuantity from ".";

// Mocks
import { mockProductQuantity } from "@/mocks";

const CustomQuantityComponent = () =>
  render(<CustomQuantity products={mockProductQuantity} />);

describe("CustomQuantity component", () => {
  it("should render snapshot correctly", () => {
    const { container } = CustomQuantityComponent();

    expect(container).toMatchSnapshot();
  });

  it("should renders list with correct products", () => {
    const { getByText } = CustomQuantityComponent();

    mockProductQuantity.forEach(({ count }) => {
      const productCountText = getByText(count.toString());
      expect(productCountText).toBeTruthy();
    });
  });
});
