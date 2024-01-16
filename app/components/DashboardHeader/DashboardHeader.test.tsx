import { render } from "@testing-library/react";

// Components
import DashboardHeader from "./DashboardHeader";

describe("DashboardHeader component", () => {
  const dashboardHeader = () => {
    return render(
      <DashboardHeader toggleSidebar={() => {}} isCollapseSidebar={false} />,
    );
  };

  it("Should render DashboardHeader snapshot correctly", () => {
    expect(dashboardHeader()).toMatchSnapshot();
  });
});
