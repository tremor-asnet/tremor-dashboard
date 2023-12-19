"use client";

import { Flex, Switch, Text } from "@tremor/react";

// Constants
import { ACCOUNT_SWITCH, APPLICATION_SWITCH } from "@/constants";

// Types
import { SettingSwitchProps } from "@/types/profile";

type AccountSettingType = {
  [key: string]: boolean;
  emailMentions: boolean;
  emailFollowing: boolean;
  emailAnswerPost: boolean;
};

type ApplicationSettingType = {
  [key: string]: boolean;
  newLaunchesProject: boolean;
  monthlyProductUpdate: boolean;
  subscribeToNewsletter: boolean;
};

interface PlatformSettingProps {
  title: string;
  accountSetting: AccountSettingType;
  applicationSetting: ApplicationSettingType;
}

const PlatformSetting = ({
  title,
  accountSetting = {
    emailMentions: false,
    emailFollowing: false,
    emailAnswerPost: false,
  },
  applicationSetting = {
    newLaunchesProject: false,
    monthlyProductUpdate: false,
    subscribeToNewsletter: false,
  },
}: PlatformSettingProps) => {
  return (
    <>
      <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
        {title}
      </Text>
      <Flex className="flex-col items-start">
        <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
          account
        </text>
        {ACCOUNT_SWITCH.map(({ label, field }: SettingSwitchProps) => (
          <>
            <div className="flex items-center space-x-3 mt-1 py-3" key={label}>
              <Switch
                tabIndex={2}
                id="switch"
                name="switch"
                color="zinc"
                className="flex justify-center items-center"
                defaultChecked={accountSetting[field]}
              />
              <Text className="text-secondary font-normal">{label}</Text>
            </div>
          </>
        ))}
        <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
          application
        </text>
        {APPLICATION_SWITCH.map(({ label, field }: SettingSwitchProps) => (
          <>
            <div className="flex items-center space-x-3 mt-1 py-3" key={label}>
              <Switch
                tabIndex={2}
                id="switch"
                name="switch"
                color="zinc"
                className="flex justify-center items-center"
                defaultChecked={applicationSetting[field]}
              />
              <Text className="text-secondary font-normal">{label}</Text>
            </div>
          </>
        ))}
      </Flex>
    </>
  );
};

export default PlatformSetting;
