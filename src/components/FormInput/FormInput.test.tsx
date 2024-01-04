import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

// Components
import FormInput from "./FormInput";

describe("FormInput component", () => {
  const props = {
    placeholder: "Search",
    type: "number",
    id: "primary_default",
    label: "User Name",
  };

  const input = () => {
    return render(<FormInput variant={"primary"} {...props} />);
  };

  it("Should render FormInput snapshot correctly", () => {
    expect(input()).toMatchSnapshot();
  });

  it("Should render FormInput correctly with placeholder prop", () => {
    const { getByPlaceholderText } = input();

    expect(getByPlaceholderText(props.placeholder));
  });

  it("Should render FormInput correctly with label prop", () => {
    const { getByTestId } = input();
    const name = getByTestId("label");

    expect(name).toHaveTextContent(props.label);
  });
});
