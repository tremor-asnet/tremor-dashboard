// Components
import { Card, Text, Flex, Title, Button } from "@tremor/react";
import Avatar from "../../components/Avatar/Avatar";
import SlackIcon from "../../components/Icons/SlackIcon";

//Types
import { Project } from "../../types/project";

//Constans
import {
  ITEM_ACTION_PROJECT,
  URL_AVATAR_PROJECT,
} from "../../constants/commons";

type AcionCard = {
  key: string;
  label: string;
};
interface IProjectCard {
  projectData: Project;
  actions: AcionCard[];
  projectId: string;
  onToggleAction: (project: Project) => void;
  onActionProject: (project: Project, action: string) => void;
  isOpenAction: boolean;
}

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

const ProjectCard = ({
  projectData = data,
  actions = ITEM_ACTION_PROJECT,
  isOpenAction = false,
  projectId = "1",
  onToggleAction,
  onActionProject,
}: IProjectCard): JSX.Element => {
  const { icon, title, date, participant, description, avatars, id } =
    projectData;

  const openActionProject = isOpenAction && id === projectId;

  const handleItemActionProject = (
    event: React.MouseEvent<HTMLElement>,
    project: Project,
    action: string,
  ) => {
    event.preventDefault();
    onActionProject(project, action);
  };

  return (
    <div className="antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="mx-auto px-4 py-1 ring-0 max-w-full lg:max-w-[356px] border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-[linear-gradient(195deg,#42424a,#191919)] justify-center rounded-xl">
            {icon}
          </Flex>
          <Flex className="pl-[90px] mb-6 relative">
            <Flex className="flex-col items-start justify-start ">
              <Title className="text-xl font-bold text-base leading-5">
                {title}
              </Title>
              <Flex className="items-start justify-start ml-[10px]">
                {avatars.map(avatar => (
                  <Avatar
                    key={avatar.key}
                    alt="Avatar extra small"
                    className="border-2 border-white border-solid ml-[-10px]"
                    height={20}
                    priority
                    src={avatar.src}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={20}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex className="flex-col w-auto justify-end">
              <Flex
                className="cursor-pointer flex-col w-[30px] h-[16px] justify-between"
                onClick={onToggleAction}>
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
              </Flex>
              {openActionProject && (
                <div className="absolute px-[18px] py-2 right-[26px] top-[5px] z-10 bg-white rounded-md shadow-md">
                  {actions.map(item => (
                    <Flex key={item.key} flex-col>
                      <Button
                        className="w-full justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-[#f0f2f5] hover:rounded-md px-1 py-[6px]"
                        variant="light"
                        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
                          handleItemActionProject(
                            event,
                            projectData,
                            item.label,
                          )
                        }>
                        <Text className="font-normal text-sm text-[#7b809a]">
                          {item.label}
                        </Text>
                      </Button>
                    </Flex>
                  ))}
                </div>
              )}
            </Flex>
          </Flex>
          <Text className="text-md text-[#7b809a] my-4 font-light">
            {description}
          </Text>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-4" />
          <Flex className="my-4">
            <div>
              <Text className="text-[#344767] font-semibold">
                {participant}
              </Text>
              <Text className="text-[#7b809a] font-normal">Participants</Text>
            </div>
            <div>
              <Text className="text-[#344767] font-semibold">{date}</Text>
              <Text className="text-[#7b809a] font-normal">Due date</Text>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
