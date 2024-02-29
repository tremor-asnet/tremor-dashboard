// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import PlatformSetting from "./PlatformSetting";

// Constants
import { APPLICATION_SETTING_DATA, ACCOUNT_SETTING_DATA } from "@/constants";

const meta = {
  title: "Components/PlatformSetting",
  tags: ["autodocs"],
  component: PlatformSetting,
  argTypes: {
    accountSettingData: {
      emailMentions: { description: "Email status field of account setting" },
    },
    applicationSettingData: {
      newLaunchesProject: {
        description: "Email status field of application setting",
      },
    },
  },
} as Meta<typeof PlatformSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <PlatformSetting
        accountSettingData={ACCOUNT_SETTING_DATA}
        applicationSettingData={APPLICATION_SETTING_DATA}
      />
    </div>
  ),
};
