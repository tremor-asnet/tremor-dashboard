//Libs
import Image from "next/image";

//Components
import { Card, Text, Flex, Title, Button } from "@tremor/react";
import Avatar from "@/components/Avatar/Avatar";

//Types
import { Project, AvatarCard } from "@/types";

//Constans
import { ITEM_ACTION_PROJECT } from "@/constants/commons";

//Mocks
import { PROJECT_DATA } from "@/mocks/project";

//Helpers
import { formatDate } from "@/helpers";

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

const ProjectCard = ({
  projectData = PROJECT_DATA[0],
  actions = ITEM_ACTION_PROJECT,
  isOpenAction = false,
  projectId = "1",
  onToggleAction,
  onActionProject,
}: IProjectCard): JSX.Element => {
  const { cover, name, dueDate, participants, description, id } = projectData;
  const participantNumber = participants?.length;
  const openActionProject = isOpenAction && id === projectId;
  const duaDateFormat = formatDate(new Date(dueDate));

  const handleItemActionProject = (project: Project, action: string) => {
    onActionProject(project, action);
  };

  return (
    <div className="antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="mx-auto px-4 py-1 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-[linear-gradient(195deg,#42424a,#191919)] justify-center rounded-xl">
            <Image
              src={cover}
              width={60}
              height={60}
              alt={`${name}-cover`}
              priority
            />
          </Flex>
          <Flex className="pl-[90px] mb-6 mt-1 relative">
            <Flex className="flex-col items-start justify-start ">
              <Title className="text-xl font-semibold text-base leading-5">
                {name}
              </Title>
              <Flex className="mt-1 items-start justify-start ml-[10px]">
                {participants?.map((participant: AvatarCard, index: string) => (
                  <Avatar
                    key={`${participant?.avatar} avatar ${index} of ${id} with ${name}`}
                    alt="Avatar extra small"
                    className="border-2 border-white border-solid ml-[-10px]"
                    height={20}
                    priority
                    src={participant?.avatar}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={20}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex className="flex-col w-auto justify-end">
              <Flex
                className="cursor-pointer flex-col w-[30px] h-[16px] justify-between"
                onClick={() => onToggleAction(projectData)}>
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
                <Text className="w-[4px] h-[4px] rounded-full bg-[#7b809a]" />
              </Flex>
              {openActionProject && (
                <div className="absolute px-[18px] py-2 right-[26px] top-[3px] z-10 bg-white rounded-md shadow-md">
                  {actions.map(item => (
                    <Flex key={item.key} flex-col>
                      <Button
                        className="w-full justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-[#f0f2f5] hover:rounded-md px-1 py-[6px]"
                        variant="light"
                        onClick={() =>
                          handleItemActionProject(projectData, item.label)
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
                {participantNumber}
              </Text>
              <Text className="text-[#7b809a] font-normal">Participants</Text>
            </div>
            <div>
              <Text className="text-[#344767] font-semibold">
                {duaDateFormat}
              </Text>
              <Text className="text-[#7b809a] font-normal">Due date</Text>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
