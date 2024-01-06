import { render } from "@testing-library/react";

// Components
import ContactCard from "./ContactCard";

// Constants
import { SOCIAL_LINK } from "@/constants";

// Mocks
import { PROFILE_INFO } from "@/mocks/card";

describe("ContactCard component", () => {
  const props = {
    information: PROFILE_INFO.description,
    fullName: "",
    phone: "",
    email: "",
    location: "",
    socials: SOCIAL_LINK,
  };

  const contactCard = () => {
    return render(<ContactCard {...props} />);
  };

  it("Should render ContactCard snapshot correctly", () => {
    expect(contactCard()).toMatchSnapshot();
  });
});
