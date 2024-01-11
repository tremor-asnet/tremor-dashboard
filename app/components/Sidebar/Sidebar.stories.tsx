import type { Meta, StoryObj } from "@storybook/react";

// Components
import SideBar from "./Sidebar";

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
    <div className="min-h-screen">
      <SideBar
        avatarUrl="/images/avatar/avatar-sm.webp"
        name="Brooklyn Alice"
        pathname={ROUTES.PROJECTS}
        toggleSidebar={() => {}}
        isCollapse={true}
        onSignOut={function (): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  ),
};
