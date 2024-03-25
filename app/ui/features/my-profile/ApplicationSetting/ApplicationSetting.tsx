"use client";
import { Switch, Text } from "@tremor/react";

// Constants
import {
  APPLICATION_SETTING_FIELDS,
  APPLICATION_SETTING_DATA,
} from "@/constants";

// Types
import { PlatformSetting, ApplicationSettingData } from "@/types";

// Contexts
import { useContext } from "react";

// Themes
import { ThemeContext } from "@/context/theme";

interface ApplicationSettingProps {
  applicationSettingFields: PlatformSetting[];
  applicationSettingData: ApplicationSettingData;
}

const ApplicationSetting = ({
  applicationSettingFields = APPLICATION_SETTING_FIELDS,
  applicationSettingData = APPLICATION_SETTING_DATA,
}: ApplicationSettingProps) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const color = isDarkTheme ? "white" : "zinc";

  return (
    <>
      <Text className="text-xs dark:text-dark-romance leading-tight opacity-100 uppercase no-underline text-[#7b809a] font-bold m-0 pt-4">
        Application
      </Text>
      {applicationSettingFields.map(({ label, field }: PlatformSetting) => (
        <div
          data-testid="application-setting"
          className="flex items-center space-x-3 mt-1 py-3"
          key={label}>
          <Switch
            tabIndex={2}
            id="switch"
            name="switch"
            color={color}
            className="flex justify-center items-center"
            defaultChecked={applicationSettingData[field]}
          />
          <Text className="text-secondary font-normal dark:text-dark-romance">
            {label}
          </Text>
        </div>
      ))}
    </>
  );
};

export default ApplicationSetting;
