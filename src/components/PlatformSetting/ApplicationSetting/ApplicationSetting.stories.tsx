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
  title: "Components/ApplicationSetting",
  tags: ["autodocs"],
  component: ApplicationSetting,
} as Meta<typeof ApplicationSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ApplicationSetting
      applicationSettingFields={APPLICATION_SETTING_FIELDS}
      applicationSettingData={APPLICATION_SETTING_DATA}
    />
  ),
};
