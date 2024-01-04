import type { Meta, StoryObj } from "@storybook/react";

// Mocks
import { PROFILE_INFO } from "../../mocks/card";

// Components
import ContactCard from "./ContactCard";

// Constants
import { SOCIAL_LINK } from "@/constants";

export default { component: ContactCard };
const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
} as Meta<typeof ContactCard>;

type Story = StoryObj<typeof meta>;

export const ContactCardInfo: Story = {
  render: () => (
    <ContactCard
      information={PROFILE_INFO.description}
      fullName=""
      phone={""}
      email={""}
      location={""}
      socials={SOCIAL_LINK}
    />
  ),
};
