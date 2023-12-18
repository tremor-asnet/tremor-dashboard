import { render } from "@testing-library/react";

// Components
import ProjectCard from "./ProjectCard";
import SlackIcon from "../../components/Icons/SlackIcon";

//Constans
import {
  ITEM_ACTION_PROJECT,
  URL_AVATAR_PROJECT,
} from "../../constants/commons";

const data = {
  id: "1",
  icon: <SlackIcon />,
  avatars: URL_AVATAR_PROJECT,
  title: "Slack Bot",
  date: "02.03.22",
  participant: 5,
  description:
    "If everything I did failed - which it doesn't, I think that it actually succeeds.",
};

describe("Testing ProjectCard component", () => {
  const propsDefault = {
    projectData: data,
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
