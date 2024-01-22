import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import ProductTable from "./ProductTable";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

describe("Testing table list component", () => {
  const propsDefault = {
    data: TABLE_LIST_DATA,
    handleCheckBox: jest.fn(),
  };

  it("Should match snapshot", () => {
    const component = render(<ProductTable {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
