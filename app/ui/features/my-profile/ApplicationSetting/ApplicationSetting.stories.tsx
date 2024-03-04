// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import ApplicationSetting from "./ApplicationSetting";

// Constants
import {
  APPLICATION_SETTING_FIELDS,
  APPLICATION_SETTING_DATA,
} from "@/constants";

const meta = {
  title: "Components/Profiles/ApplicationSetting",
  tags: ["autodocs"],
  argTypes: {
    applicationSettingFields: {
      label: { description: "Email label of application setting" },
      field: { description: "Email field of application setting" },
    },
    applicationSettingData: {
      newLaunchesProject: {
        description: "Email status field of application setting",
      },
    },
  },
  component: ApplicationSetting,
} as Meta<typeof ApplicationSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <ApplicationSetting
        applicationSettingFields={APPLICATION_SETTING_FIELDS}
        applicationSettingData={APPLICATION_SETTING_DATA}
      />
    </div>
  ),
};
