import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProfileProjectCard from "../components/ProfileProjectCard/ProfileProjectCard";

//Mocks
import { PROFILE_INFO_PROJECT_CARD } from "@/mocks";

const meta = {
  title: "Components/ProfileProjectCard",
  component: ProfileProjectCard,
  tags: ["autodocs"],
} as Meta<typeof ProfileProjectCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <ProfileProjectCard links={PROFILE_INFO_PROJECT_CARD} />,
};
