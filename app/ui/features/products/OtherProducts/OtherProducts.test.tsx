import { render } from "@testing-library/react";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

// Components
import OtherProducts from "./OtherProducts";

jest.mock("next/navigation", () => {
  const actual = jest.mock("next/navigation");
  return {
    ...actual,
    useRouter: jest.fn(() => ({
      push: jest.fn(),
      replace: jest.fn(),
    })),
    useSearchParams: jest.fn(() => ({})),
    usePathname: jest.fn(),
  };
});

describe("Other Products Table Testing", () => {
  it("should match snapshot", () => {
    const { container } = render(<OtherProducts products={MOCK_PRODUCTS} />);

    expect(container).toMatchSnapshot();
  });
});
