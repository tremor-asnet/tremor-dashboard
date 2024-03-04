import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProjectInfoCard from "./ProjectInfoCard";

//Mocks
import { PROFILE_INFO_PROJECT_CARD } from "@/mocks";

const meta = {
  title: "Components/ProjectInfoCard",
  component: ProjectInfoCard,
  tags: ["autodocs"],
  argTypes: {
    id: { description: "Id of project" },
    cover: { description: "Cover image of project" },
    participants: [
      {
        name: { description: "Name of project" },
        avatar: { description: "Uses in project" },
      },
    ],
    primaryName: { description: "Primary name of project" },
    description: { description: "description of project" },
    secondaryName: { description: "Second name of project" },
  },
} as Meta<typeof ProjectInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <ProjectInfoCard links={PROFILE_INFO_PROJECT_CARD} />
    </div>
  ),
};
