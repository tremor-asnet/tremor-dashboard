import type { Meta, StoryObj } from "@storybook/react";

// Components
import ProjectCard from "./ProjectCard";
import { SlackIcon } from "../../components/Icons/SlackIcon";

//Constans
import {
  ITEM_ACTION_PROJECT,
  URL_AVATAR_PROJECT,
} from "../../constants/commons";

export default { component: ProjectCard };
const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  tags: ["autodocs"],
} as Meta<typeof ProjectCard>;

type Story = StoryObj<typeof meta>;

export const ProjectCardDefault: Story = {
  render: () => (
    <ProjectCard
      icon={<SlackIcon />}
      title="Slack Bot"
      date="02.03.22"
      participant={5}
      description="If everything I did failed - which it doesn't, I think that it actually succeeds."
      avatars={URL_AVATAR_PROJECT}
      actions={ITEM_ACTION_PROJECT}
      isOpenAction={false}
      handletToggleAction={() => {}}
    />
  ),
};
