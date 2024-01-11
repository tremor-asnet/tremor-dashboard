import { render } from "@testing-library/react";
import UserConversationHistory from "./UserConversationHistory";

// Constants
import { AVATAR_SRC } from "@/constants";

describe("UserConversationHistory component", () => {
  const props = {
    avatar: AVATAR_SRC.md,
    name: "Sophie.B",
    lastConversation: "Hi! I need more information..",
  };

  const userConversationHistory = () => {
    return render(<UserConversationHistory {...props} />);
  };

  it("Should render UserConversationHistory snapshot correctly", () => {
    expect(userConversationHistory()).toMatchSnapshot();
  });
});
