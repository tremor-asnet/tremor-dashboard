import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import Tabs from "./Tabs";
import { TABS_HEADER } from "@/constants";

describe("Tabs component", () => {
  it("Should render Tabs snapshot correctly", () => {
    const component = render(<Tabs tabs={TABS_HEADER} />);
    expect(component).toMatchSnapshot();
  });
});
