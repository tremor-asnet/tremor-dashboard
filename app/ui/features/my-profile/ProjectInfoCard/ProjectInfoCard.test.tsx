// ProjectInfoCard.test.tsx
import { render } from "@testing-library/react";

// Components
import ProjectInfoCard from "./ProjectInfoCard";

// Mocks
import { PROFILE_INFO_PROJECT_CARD } from "@/mocks";

const ProjectInfoCardProps = {
  links: PROFILE_INFO_PROJECT_CARD,
};

const ProjectInfoCardComponent = () =>
  render(<ProjectInfoCard {...ProjectInfoCardProps} />);

describe("ProjectInfoCard Component", () => {
  it("render ProjectInfoCard component with snapshot correctly", () => {
    const { container } = ProjectInfoCardComponent();

    expect(container).toMatchSnapshot();
  });

  it("renders ProjectInfoCard component with mock data", () => {
    const { getByText } = ProjectInfoCardComponent();

    const projectNames = PROFILE_INFO_PROJECT_CARD.map(({ primaryName }) =>
      getByText(primaryName),
    );
    expect(projectNames.length).toBe(PROFILE_INFO_PROJECT_CARD.length);
  });
});
