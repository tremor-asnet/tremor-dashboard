import { render } from "@testing-library/react";

// Components
import ApplicationSetting from "./ApplicationSetting";

// Constants
import { APPLYCATION_SETTING_DATA, APPLICATION_SETTING } from "@/constants";

describe("ApplicationSetting component", () => {
  const props = {
    applicationSetting: APPLICATION_SETTING,
    applicationSettingData: APPLYCATION_SETTING_DATA,
  };

  const applicationSetting = () => {
    return render(<ApplicationSetting {...props} />);
  };

  it("Should render ApplicationSetting snapshot correctly", () => {
    expect(applicationSetting()).toMatchSnapshot();
  });
});
