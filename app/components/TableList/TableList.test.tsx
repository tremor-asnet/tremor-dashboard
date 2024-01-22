import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import TableList from "./TableList";

// Mock data
import { TABLE_LIST_DATA } from "@/mocks";

describe("Testing table list component", () => {
  const propsDefault = {
    data: TABLE_LIST_DATA,
    handleCheckBox: jest.fn(),
  };

  it("Should match snapshot", () => {
    const component = render(<TableList {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
