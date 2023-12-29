import { render } from "@testing-library/react";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING, ACCOUNT_SETTING_DATA } from "@/constants";

describe("AccountSetting component", () => {
  const props = {
    accountSetting: ACCOUNT_SETTING,
    accountSettingData: ACCOUNT_SETTING_DATA,
  };

  const accountSetting = () => {
    return render(<AccountSetting {...props} />);
  };

  it("Should render AccountSetting snapshot correctly", () => {
    expect(accountSetting()).toMatchSnapshot();
  });
});
