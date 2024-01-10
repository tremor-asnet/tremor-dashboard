import type { Meta, StoryObj } from "@storybook/react";

// Components
import AnalyticsInfo from "./AnalyticsInfo";

// Mock data
import { ANALYTIC_INFO } from "@/mocks/analytics";

const meta = {
  title: "Components/AnalyticsInfo",
  component: AnalyticsInfo,
  tags: ["autodocs"],
} as Meta<typeof AnalyticsInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AnalyticsInfoDefault: Story = {
  render: () => <AnalyticsInfo infoData={ANALYTIC_INFO[0]} />,
};
