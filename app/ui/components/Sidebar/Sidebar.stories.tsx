import type { Meta, StoryObj } from "@storybook/react";

// Components
import SideBar from "./Sidebar";

// Constants
import { ROUTES } from "@/constants";

const meta = {
  title: "Components/Common/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {
    avatarUrl: { description: "Src of user avatar on side bar" },
    name: { description: "User name on side bar" },
    pathname: { description: "Path name of page on side bar" },
    toggleSidebar: { description: "Function toogle icon of side bar" },
    isCollapse: { description: "Set state collapse for side bar" },
    onSignOut: { description: "Function logout user on side bar" },
  },
} as Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBarDashboard: Story = {
  args: {
    avatarUrl: "/images/avatar/avatar-sm.webp",
    name: "Brooklyn Alice",
    pathname: ROUTES.PROJECTS,
    toggleSidebar: () => {},
    isCollapse: true,
    onSignOut: function (): Promise<void> {
      throw new Error("Function not implemented.");
    },
  },
};
