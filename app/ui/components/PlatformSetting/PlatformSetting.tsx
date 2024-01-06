import { Flex, Text } from "@tremor/react";

// Types
import { AccountSettingType, ApplicationSettingType } from "@/types";

// Constants
import {
  ACCOUNT_SETTING_FIELDS,
  ACCOUNT_SETTING_DATA,
  APPLICATION_SETTING_FIELDS,
  APPLICATION_SETTING_DATA,
} from "@/constants";

// Components
import { AccountSetting, ApplicationSetting } from "@/ui/components";

interface PlatformSettingProps {
  accountSettingData: AccountSettingType;
  applicationSettingData: ApplicationSettingType;
}

const PlatformSetting = ({
  accountSettingData = ACCOUNT_SETTING_DATA,
  applicationSettingData = APPLICATION_SETTING_DATA,
}: PlatformSettingProps) => {
  return (
    <>
      <Text className="text-tremor-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
        Platform Setting
      </Text>
      <Flex className="flex-col items-start">
        <AccountSetting
          accountSettingData={accountSettingData}
          accountSettingFields={ACCOUNT_SETTING_FIELDS}
        />
        <ApplicationSetting
          applicationSettingData={applicationSettingData}
          applicationSettingFields={APPLICATION_SETTING_FIELDS}
        />
      </Flex>
    </>
  );
};

export default PlatformSetting;
