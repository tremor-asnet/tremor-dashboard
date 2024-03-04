// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

const meta = {
  title: "Components/Profiles/AccountSetting",
  tags: ["autodocs"],
  component: AccountSetting,
  argTypes: {
    accountSettingFields: {
      label: { description: "Email label of account setting" },
      field: { description: "Email field of account setting" },
    },
    accountSettingData: {
      emailMentions: { description: "Email status field of account setting" },
    },
  },
} as Meta<typeof AccountSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-white dark:bg-dark-primary p-6 rounded-xl shadow-md">
      <AccountSetting
        accountSettingFields={ACCOUNT_SETTING_FIELDS}
        accountSettingData={ACCOUNT_SETTING_DATA}
      />
    </div>
  ),
};
