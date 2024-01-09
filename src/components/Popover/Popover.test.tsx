import { render } from "@testing-library/react";

// Components
import { Text } from "@tremor/react";
import Popover from "./Popover";

describe("Testing Popover component", () => {
  const propsDefault = {
    content: "Content popover",
  };

  it("Should match snapshot", () => {
    const component = render(
      <Popover {...propsDefault}>
        <Text>Hover to show content popover</Text>
      </Popover>,
    );
    expect(component).toMatchSnapshot();
  });
});
