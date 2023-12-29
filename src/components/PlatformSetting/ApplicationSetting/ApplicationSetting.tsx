"use client";
import { Switch, Text } from "@tremor/react";

// Constants
import { APPLICATION_SETTING, APPLICATION_SETTING_DATA } from "@/constants";

// Types
import { IPlatformSetting, ApplicationSettingType } from "@/types/profile";

interface IApplicationSettingProps {
  applicationSettingData: IPlatformSetting[];
  applicationSetting: ApplicationSettingType;
}

const ApplicationSetting = ({
  applicationSetting = APPLICATION_SETTING,
  applicationSettingData = APPLICATION_SETTING_DATA,
}: IApplicationSettingProps) => {
  return (
    <>
      <Text className="text-xs leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
        Application
      </Text>
      {applicationSettingData.map(({ label, field }: IPlatformSetting) => (
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
      ))}
    </>
  );
};

export default ApplicationSetting;
