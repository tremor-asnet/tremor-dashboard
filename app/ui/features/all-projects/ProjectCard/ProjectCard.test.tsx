import { fireEvent, render, waitFor } from "@testing-library/react";

//Components
import ProjectCard from "./ProjectCard";

//Constans
import { ITEM_ACTION_PROJECT } from "@/constants";

//Mocks
import { PROJECT_DATA } from "@/mocks/project";

describe("Testing ProjectCard component", () => {
  const propsDefault = {
    projectData: PROJECT_DATA[0],
    actions: ITEM_ACTION_PROJECT,
  };

  const renderWrapper = () => render(<ProjectCard {...propsDefault} />);

  it("Should match snapshot", () => {
    const component = renderWrapper();

    expect(component).toMatchSnapshot();
  });

  it("Should toggle action menu when ellipsis icon is clicked", async () => {
    const { findByTestId } = renderWrapper();

    fireEvent.click(await findByTestId("toggle-icon"));

    expect(await findByTestId("menu-action")).toBeTruthy();
  });

  it("Should close action menu when clicking outside the component", async () => {
    const renderWrapperWithOutSide = () =>
      render(
        <div data-testid="outside">
          <ProjectCard {...propsDefault} />
        </div>,
      );
    const { findByTestId } = renderWrapperWithOutSide();

    fireEvent.click(await findByTestId("toggle-icon"));
    fireEvent.click(await findByTestId("outside"));

    waitFor(() => expect(findByTestId("menu-action")).toBeFalsy());
  });

  it("Should close action menu when an action is clicked", async () => {
    const { findByTestId } = renderWrapper();

    fireEvent.click(await findByTestId("toggle-icon"));
    fireEvent.click(await findByTestId(ITEM_ACTION_PROJECT[0].key));

    waitFor(() => expect(findByTestId("menu-action")).toBeFalsy());
  });
});
