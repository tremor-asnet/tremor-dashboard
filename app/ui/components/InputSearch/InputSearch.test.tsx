import { render } from "@testing-library/react";

// Components
import InputSearch from "./InputSearch";

// Mock the necessary modules
jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/mocked-path"),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams()),
}));

describe("InputSearch component", () => {
  test("should matches snapshot", () => {
    const component = render(<InputSearch />);
    expect(component).toMatchSnapshot();
  });
});
