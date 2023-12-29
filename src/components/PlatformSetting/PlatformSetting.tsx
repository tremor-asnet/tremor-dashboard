import { Flex, Text } from "@tremor/react";

// Types
import { AccountSettingType, ApplicationSettingType } from "@/types";

// Constants
import {
  ACCOUNT_SETTING,
  ACCOUNT_SETTING_DATA,
  APPLICATION_SETTING,
  APPLICATION_SETTING_DATA,
} from "@/constants";

// Components
import { AccountSetting, ApplicationSetting } from "@/components";

interface PlatformSettingProps {
  accountSetting: AccountSettingType;
  applicationSetting: ApplicationSettingType;
}

const PlatformSetting = ({
  accountSetting = ACCOUNT_SETTING,
  applicationSetting = APPLICATION_SETTING,
}: PlatformSettingProps) => {
  return (
    <>
      <Text className="text-tremor-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
        Platform Setting
      </Text>
      <Flex className="flex-col items-start">
        <AccountSetting
          accountSetting={accountSetting}
          accountSettingData={ACCOUNT_SETTING_DATA}
        />
        <ApplicationSetting
          applicationSetting={applicationSetting}
          applicationSettingData={APPLICATION_SETTING_DATA}
        />
      </Flex>
    </>
  );
};

export default PlatformSetting;
