import type { Meta, StoryObj } from "@storybook/react";

// Mocks
import { PROFILE_INFO } from "../../mocks/card";

// Components
import ContactCard from "./ContactCard";

// Constants
import { SOCIAL_LINK } from "@/constants";

const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
} as Meta<typeof ContactCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContactCardInfo: Story = {
  render: () => (
    <ContactCard
      information={PROFILE_INFO.description}
      fullName={PROFILE_INFO.info[0].value}
      phone={PROFILE_INFO.info[1].value}
      email={PROFILE_INFO.info[2].value}
      location={PROFILE_INFO.info[3].value}
      socials={SOCIAL_LINK}
    />
  ),
};
