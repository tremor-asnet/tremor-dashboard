import { render } from "@testing-library/react";
import ConversationItem from "./ConversationItem";

describe("ConversationItem component", () => {
  const props = {
    src: "/images/avatar/avatar-md.webp",
    alt: "image",
    name: "Sophie.B",
    description: "Hi! I need more information..",
  };

  const conversationItem = () => {
    return render(<ConversationItem {...props} />);
  };

  it("Should render ConversationItem snapshot correctly", () => {
    expect(conversationItem()).toMatchSnapshot();
  });
});
