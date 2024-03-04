import { render } from "@testing-library/react";

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
    isOpenAction: false,
    projectId: "1",
    onToggleAction: jest.fn(),
    onActionProject: jest.fn(),
  };

  it("Should match snapshot", () => {
    const component = render(<ProjectCard {...propsDefault} />);
    expect(component).toMatchSnapshot();
  });
});
