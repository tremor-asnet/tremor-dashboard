import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProjectCard from "./ProjectCard";

//Constans
import { ITEM_ACTION_PROJECT } from "../../constants/commons";

//Mocks
import { PROJECT_DATA } from "@/mocks/project";

export default { component: ProjectCard };
const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
} as Meta<typeof ProjectCard>;

type Story = StoryObj<typeof meta>;

export const ProjectCardDefault: Story = {
  render: () => (
    <ProjectCard projectData={PROJECT_DATA[0]} actions={ITEM_ACTION_PROJECT} />
  ),
};
