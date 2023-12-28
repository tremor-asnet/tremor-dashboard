import { render } from "@testing-library/react";

// Components
import { ConversationHistory } from "..";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profile";

describe("ConversationHistory component", () => {
  const props = {
    profileList: PROFILE_CONVERSATIONS,
    onClick: jest.fn(),
  };

  const profile = () => {
    return render(<ConversationHistory {...props} />);
  };

  it("Should render ConversationHistory snapshot correctly", () => {
    expect(profile()).toMatchSnapshot();
  });
});
