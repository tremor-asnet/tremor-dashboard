import { render } from "@testing-library/react";
import UserConversationHistory from "./UserConversationHistory";

describe("UserConversationHistory component", () => {
  const props = {
    avatar: "/images/avatar/avatar-md.webp",
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
