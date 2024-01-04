"use client";
import { Switch, Text } from "@tremor/react";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

// Types
import { IPlatformSetting, AccountSettingType } from "@/types/profile";

interface AccountSettingProps {
  accountSettingFields: IPlatformSetting[];
  accountSettingData: AccountSettingType;
}

const AccountSetting = ({
  accountSettingFields = ACCOUNT_SETTING_FIELDS,
  accountSettingData = ACCOUNT_SETTING_DATA,
}: AccountSettingProps) => {
  return (
    <>
      <Text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
        Account
      </Text>
      {accountSettingFields.map(({ label, field }: IPlatformSetting) => (
        <div className="flex items-center space-x-3 mt-1 py-3" key={label}>
          <Switch
            tabIndex={2}
            id="switch"
            name="switch"
            color="zinc"
            className="flex justify-center items-center"
            defaultChecked={accountSettingData[field]}
          />
          <Text className="text-secondary font-normal">{label}</Text>
        </div>
      ))}
    </>
  );
};

export default AccountSetting;
