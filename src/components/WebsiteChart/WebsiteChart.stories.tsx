// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import WebsiteChart from "./WebsiteChart";
import { WEBSITE_CHART } from "@/mocks/analytics";

const meta = {
  title: "Components/WebsiteChart",
  tags: ["autodocs"],
  component: WebsiteChart,
} as Meta<typeof WebsiteChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <WebsiteChart
      data={WEBSITE_CHART}
      title={"website views"}
      subTitle={"Last Campaign Performance"}
      scheduleText={"campaign sent 2 days ago"}
    />
  ),
};
