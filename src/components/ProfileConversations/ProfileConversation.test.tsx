import { render } from "@testing-library/react";

// Components
import { ProfileConversations } from "..";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profile";

describe("ProfileConversation component", () => {
  const props = {
    profileList: PROFILE_CONVERSATIONS,
    onClick: jest.fn(),
  };

  const profile = () => {
    return render(<ProfileConversations title="Conversation" {...props} />);
  };

  it("Should render ProfileConversations snapshot correctly", () => {
    expect(profile()).toMatchSnapshot();
  });
});
