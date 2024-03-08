import { render } from "@testing-library/react";
import { useState } from "react";

// Constants
import { orderListOption } from "@/constants";

// Components
import Filter from "./Filter";

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

describe("Testing Filter component", () => {
  it("Should match snapshot", () => {
    const component = render(
      <Filter title="Status" listOption={orderListOption} />,
    );
    expect(component).toMatchSnapshot();
  });
});
