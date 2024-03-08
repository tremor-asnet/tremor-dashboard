import type { Meta, StoryObj } from "@storybook/react";

// Components
import DashboardHeader from "./DashboardHeader";

const meta = {
  title: "Components/Common/DashboardHeader",
  component: DashboardHeader,
  tags: ["autodocs"],
  argTypes: {
    isCollapseSidebar: {
      description: "Collapse or expand sidebar of dashboard header",
    },
    toggleSidebar: { description: "Toggle sidebar of dashboard header" },
  },
} as Meta<typeof DashboardHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  args: {
    toggleSidebar: () => {},
    isCollapseSidebar: false,
  },
};
