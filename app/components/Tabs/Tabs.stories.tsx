import type { Meta, StoryObj } from "@storybook/react";

// Components
import Tabs from "./Tabs";
import { TABS_HEADER } from "@/constants";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} as Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TabsHeader: Story = {
  render: () => <Tabs tabs={TABS_HEADER} />,
};
