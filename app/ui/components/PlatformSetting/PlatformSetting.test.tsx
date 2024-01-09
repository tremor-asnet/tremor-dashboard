import { render } from "@testing-library/react";

// Components
import PlatformSetting from "./PlatformSetting";

// Constants
import {
  ACCOUNT_SETTING_DATA,
  APPLICATION_SETTING_DATA,
} from "@/constants/profile";

describe("PlatformSetting component", () => {
  const props = {
    applicationSettingData: APPLICATION_SETTING_DATA,
    accountSettingData: ACCOUNT_SETTING_DATA,
  };

  const platformSetting = () => {
    return render(<PlatformSetting {...props} />);
  };

  it("Should render PlatformSetting snapshot correctly", () => {
    expect(platformSetting()).toMatchSnapshot();
  });
});
