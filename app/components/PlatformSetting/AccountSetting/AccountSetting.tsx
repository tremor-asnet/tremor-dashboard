"use client";
import { Switch, Text } from "@tremor/react";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

// Types
import { IPlatformSetting, AccountSettingType } from "@/types/profile";

// Contexts
import { useContext } from "react";

// Themes
import { ThemeContext } from "@/context/theme";

interface AccountSettingProps {
  accountSettingFields: IPlatformSetting[];
  accountSettingData: AccountSettingType;
}

const AccountSetting = ({
  accountSettingFields = ACCOUNT_SETTING_FIELDS,
  accountSettingData = ACCOUNT_SETTING_DATA,
}: AccountSettingProps) => {
  const { theme } = useContext(ThemeContext);
  const color = theme ? "white" : "zinc";

  return (
    <>
      <Text className="text-xs leading-tight dark:text-dark-romance opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
        Account
      </Text>
      {accountSettingFields.map(({ label, field }: IPlatformSetting) => (
        <div className="flex items-center space-x-3 mt-1 py-3" key={label}>
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
