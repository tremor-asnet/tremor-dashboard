import type { Meta, StoryObj } from "@storybook/react";

// Mocks
import { PROFILE_INFO } from "@/mocks";

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
      fullName=""
      phone={""}
      email={""}
      location={""}
      socials={SOCIAL_LINK}
    />
  ),
};
