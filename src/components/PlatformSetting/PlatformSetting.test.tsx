import { render } from "@testing-library/react";

// Components
import PlatformSetting from "./PlatformSetting";

// Constants
import { ACCOUNT_SETTING, APPLICATION_SETTING } from "@/constants";

describe("PlatformSetting component", () => {
  const props = {
    applicationSetting: APPLICATION_SETTING,
    accountSetting: ACCOUNT_SETTING,
  };

  const platformSetting = () => {
    return render(<PlatformSetting {...props} />);
  };

  it("Should render PlatformSetting snapshot correctly", () => {
    expect(platformSetting()).toMatchSnapshot();
  });
});
