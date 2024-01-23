import { render } from "@testing-library/react";

// Components
import SelectOption from ".";
import { listOption } from "@/constants";

const Props = {
  data: listOption,
  onClickItem: jest.fn(),
};

describe("Testing SelectOption component", () => {
  it("Should match snapshot", () => {
    const component = render(<SelectOption {...Props} />);
    expect(component).toMatchSnapshot();
  });
});
