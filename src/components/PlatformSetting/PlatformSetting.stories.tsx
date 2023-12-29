// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import PlatformSetting from "./PlatformSetting";

// Constants
import { APPLICATION_SETTING, ACCOUNT_SETTING } from "@/constants";

const meta = {
  title: "Components/PlatformSetting",
  tags: ["autodocs"],
  component: PlatformSetting,
} as Meta<typeof PlatformSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PlatformSetting
      accountSetting={ACCOUNT_SETTING}
      applicationSetting={APPLICATION_SETTING}
    />
  ),
};
