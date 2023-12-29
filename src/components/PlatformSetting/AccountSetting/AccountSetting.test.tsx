import { render } from "@testing-library/react";

// Components
import AccountSetting from "./AccountSetting";

// Constants
import { ACCOUNT_SETTING_FIELDS, ACCOUNT_SETTING_DATA } from "@/constants";

describe("AccountSetting component", () => {
  const props = {
    accountSettingFields: ACCOUNT_SETTING_FIELDS,
    accountSettingData: ACCOUNT_SETTING_DATA,
  };

  const accountSetting = () => {
    return render(<AccountSetting {...props} />);
  };

  it("Should render AccountSetting snapshot correctly", () => {
    expect(accountSetting()).toMatchSnapshot();
  });
});
