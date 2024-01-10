import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProjectInfoCard from "@/components/ProjectInfoCard/ProjectInfoCard";

//Mocks
import { PROFILE_INFO_PROJECT_CARD } from "@/mocks";

const meta = {
  title: "Components/ProjectInfoCard",
  component: ProjectInfoCard,
  tags: ["autodocs"],
} as Meta<typeof ProjectInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <ProjectInfoCard links={PROFILE_INFO_PROJECT_CARD} />,
};
