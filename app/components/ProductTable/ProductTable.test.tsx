import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProductTable from "./ProductTable";

// Mock data
import { MOCK_PRODUCTS } from "@/mocks";

describe("Testing table list component", () => {
  it("Should match snapshot", () => {
    const component = render(<ProductTable data={MOCK_PRODUCTS} />);
    expect(component).toMatchSnapshot();
  });
});
