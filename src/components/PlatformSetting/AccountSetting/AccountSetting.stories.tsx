// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

const meta = {
  title: "Components/AccountSetting",
  tags: ["autodocs"],
  component: AccountSetting,
} as Meta<typeof AccountSetting>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AccountSetting
      accountSettingFields={ACCOUNT_SETTING_FIELDS}
      accountSettingData={ACCOUNT_SETTING_DATA}
    />
  ),
};
