import { render } from "@testing-library/react";
import { useState } from "react";

// Components
import OrderFilter from ".";

let mockSearchParam = "";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: () => {
    const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
    return [
      params,
      (newParams: string) => {
        mockSearchParam = newParams;
        setParams(new URLSearchParams(newParams));
      },
    ];
  },
  usePathname: jest.fn(),
}));

describe("Testing OrderFilter component", () => {
  it("Should match snapshot", () => {
    const component = render(<OrderFilter />);
    expect(component).toMatchSnapshot();
  });
});
