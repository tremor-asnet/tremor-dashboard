import { render } from "@testing-library/react";

// Components
import ApplicationSetting from "./ApplicationSetting";

// Constants
import {
  APPLICATION_SETTING_DATA,
  APPLICATION_SETTING_FIELDS,
} from "@/constants";

describe("ApplicationSetting component", () => {
  const props = {
    applicationSettingFields: APPLICATION_SETTING_FIELDS,
    applicationSettingData: APPLICATION_SETTING_DATA,
  };

  const applicationSetting = () => {
    return render(<ApplicationSetting {...props} />);
  };

  it("Should render ApplicationSetting snapshot correctly", () => {
    expect(applicationSetting()).toMatchSnapshot();
  });
});
