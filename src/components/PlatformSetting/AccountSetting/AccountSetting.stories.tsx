// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING } from "@/constants";

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
      accountSetting={{
        emailMentions: false,
        emailFollowing: false,
        emailAnswerPost: false,
      }}
      accountSettingData={ACCOUNT_SETTING}
    />
  ),
};
