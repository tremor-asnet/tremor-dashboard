"use client";
import { Switch, Text } from "@tremor/react";

// Types
import { PlatformSetting, AccountSettingData } from "@/types";

// Contexts
import { useContext } from "react";

// Themes
import { ThemeContext } from "@/context/theme";

interface AccountSettingProps {
  accountSettingFields: PlatformSetting[];
  accountSettingData: AccountSettingData;
}

const AccountSetting = ({
  accountSettingFields,
  accountSettingData,
}: AccountSettingProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const color = isDarkTheme ? "white" : "zinc";

  return (
    <>
      <Text className="text-xs leading-tight dark:text-dark-romance opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
        Account
      </Text>
      {accountSettingFields.map(({ label, field }: PlatformSetting) => (
        <div
          className="flex items-center space-x-3 mt-1 py-3"
          key={label}
          data-testid="account-setting">
          <Switch
            tabIndex={2}
            id="switch"
            name="switch"
            color={color}
            className="flex justify-center items-center dark:text-dark-romance"
            defaultChecked={accountSettingData[field]}
          />
          <Text className="text-secondary font-normal dark:text-dark-romance">
            {label}
          </Text>
        </div>
      ))}
    </>
  );
};

export default AccountSetting;
