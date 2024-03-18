import { render } from "@testing-library/react";

// Components
import ConversationHistory from "./ConversationHistory";

// Mocks
import { PROFILE_CONVERSATIONS } from "@/mocks/profile";

describe("ConversationHistory component", () => {
  const props = {
    conversationHistory: PROFILE_CONVERSATIONS,
  };

  const profile = () => {
    return render(<ConversationHistory {...props} />);
  };

  it("Should render ConversationHistory snapshot correctly", () => {
    expect(profile()).toMatchSnapshot();
  });
});
