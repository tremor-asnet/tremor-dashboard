import { fireEvent, render } from "@testing-library/react";
import ProfileItem from "./ProfileItem";

describe("ProfileItem component", () => {
  const props = {
    src: "/images/avatar/avatar-md.webp",
    alt: "image",
    name: "Sophie.B",
    description: "Hi! I need more information..",
    onClick: jest.fn(),
  };

  const profileItem = () => {
    return render(<ProfileItem {...props} />);
  };

  it("Should render ProfileItem snapshot correctly", () => {
    expect(profileItem()).toMatchSnapshot();
  });

  it("Should render ProfileItem correctly with onClick prop", () => {
    const { getByTestId } = profileItem();
    const onClick = getByTestId("click-button");
    fireEvent.click(onClick);

    expect(props.onClick).toHaveBeenCalled();
  });
});
