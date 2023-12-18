"use client";

import { Flex, Switch, Text } from "@tremor/react";
import { useState } from "react";

// Constants
import { ACCOUNT_SWITCH, APPLICATION_SWITCH } from "@/constants";

// Types
import { SettingSwitchProps } from "@/types/profile";

interface PlatformSettingProps {
  title: string;
}

const PlatformSetting = ({ title }: PlatformSettingProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);

  // Handle to change value is (true or false) for attr checked switch
  const handleSwitchChange = (value: boolean) => {
    setIsSwitchOn(value);
  };

  return (
    <>
      <Text className="text-sm leading-relaxed font-bold tracking-[0.0075em] opacity-100 capitalize no-underline text-[#344767] py-4">
        {title}
      </Text>
      <Flex className="flex-col items-start">
        <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
          account
        </text>
        {ACCOUNT_SWITCH.map(({ label }: SettingSwitchProps) => (
          <>
            <div className="flex items-center space-x-3 mt-1 py-3">
              <Switch
                key={label}
                tabIndex={2}
                id="switch"
                name="switch"
                checked={isSwitchOn}
                color="zinc"
                className="flex justify-center items-center"
                onChange={handleSwitchChange}
              />
              <Text className="text-secondary font-normal">{label}</Text>
            </div>
          </>
        ))}
        <text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
          application
        </text>
        {APPLICATION_SWITCH.map(({ label }: SettingSwitchProps) => (
          <>
            <div className="flex items-center space-x-3 mt-1 py-3">
              <Switch
                key={label}
                tabIndex={2}
                id="switch"
                name="switch"
                checked={isSwitchOn}
                color="zinc"
                className="flex justify-center items-center"
                onChange={handleSwitchChange}
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
