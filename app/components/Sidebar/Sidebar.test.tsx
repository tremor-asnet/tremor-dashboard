import { render } from "@testing-library/react";

// Components
import Sidebar from "./Sidebar";

// Constants
import { ROUTES } from "@/constants";

describe("Sidebar component", () => {
  const sidebar = () => {
    return render(
      <Sidebar
        avatarUrl="/images/avatar/avatar-sm.webp"
        name="Brooklyn Alice"
        pathname={ROUTES.PROJECTS}
        toggleSidebar={() => {}}
        isCollapse={true}
        onSignOut={function (): Promise<void> {
          throw new Error("Function not implemented.");
        }}
      />,
    );
  };

  it("Should render Sidebar snapshot correctly", () => {
    expect(sidebar()).toMatchSnapshot();
  });
});
