import type { Meta, StoryObj } from "@storybook/react";

// Components
import ContactCard from "./ContactCard";

export default { component: ContactCard };
const meta = {
  title: "Components/ContactCard",
  component: ContactCard,
  tags: ["autodocs"],
} as Meta<typeof ContactCard>;

type Story = StoryObj<typeof meta>;

export const ContactCardInfo: Story = {
  render: () => <ContactCard />,
};
