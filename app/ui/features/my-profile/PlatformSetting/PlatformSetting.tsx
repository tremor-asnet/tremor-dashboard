import { Flex, Text } from "@tremor/react";

// Types
import { AccountSettingData, ApplicationSettingData } from "@/types";

// Constants
import {
  ACCOUNT_SETTING_FIELDS,
  ACCOUNT_SETTING_DATA,
  APPLICATION_SETTING_FIELDS,
  APPLICATION_SETTING_DATA,
} from "@/constants";
import dynamic from "next/dynamic";

// Components
const AccountSetting = dynamic(
  () => import("@/ui/features/my-profile/AccountSetting/AccountSetting"),
);
const ApplicationSetting = dynamic(
  () =>
    import("@/ui/features/my-profile/ApplicationSetting/ApplicationSetting"),
);

interface PlatformSettingProps {
  accountSettingData: AccountSettingData;
  applicationSettingData: ApplicationSettingData;
}

const PlatformSetting = ({
  accountSettingData = ACCOUNT_SETTING_DATA,
  applicationSettingData = APPLICATION_SETTING_DATA,
}: PlatformSettingProps) => {
  return (
    <>
      <Text className="text-tremor-title text-tremor-content-title dark:text-dark-tremor-content-title leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-primary py-4">
        Platform Settings
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
