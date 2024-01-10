import type { Meta, StoryObj } from "@storybook/react";

// Components
import SideBar from "./SideBar";

// Constants
import { ROUTES } from "@/constants";

const meta = {
  title: "Components/SideBar",
  component: SideBar,
  tags: ["autodocs"],
} as Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SideBarDashboard: Story = {
  render: () => (
    <SideBar
      pathname={ROUTES.PROJECTS}
      toggleSidebar={() => {}}
      isCollapse={true}
      onSignOut={function (): Promise<void> {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
