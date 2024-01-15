"use client";

//Libs
import { useState } from "react";
import { Card, Text, Flex, Title, Button } from "@tremor/react";

//Components
import { Avatar, CustomImage } from "@/components";

//Types
import { Project, AvatarCard } from "@/types";

//Constants
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
}

const ProjectCard = ({
  projectData = PROJECT_DATA[0],
  actions = ITEM_ACTION_PROJECT,
}: IProjectCard): JSX.Element => {
  const { cover, name, dueDate, participants, description, id } = projectData;
  const participantNumber = participants?.length;
  const duaDateFormat = formatDate(new Date(dueDate));

  const [isOpenAction, setOpenAction] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState("");
  const openActionProject = isOpenAction && id === currentProjectId;

  const handleItemActionProject = () => {
    setOpenAction(false);
  };

  const handleToggleAction = (id: string) => {
    setOpenAction(!isOpenAction);
    setCurrentProjectId(id);
  };

  return (
    <div className="antialiased items-center justify-between pb-1">
      <div className="flex items-center">
        <Card className="dark:bg-dark-tremor-primary mx-auto px-4 py-1 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-gradient-arsenic justify-center rounded-xl dark:bg-gradient-pickled">
            <CustomImage
              src={cover}
              width={60}
              height={60}
              alt={`${name}-cover`}
              priority
            />
          </Flex>
          <Flex className="pl-[90px] mb-6 mt-1 relative">
            <Flex className="flex-col items-start justify-start ">
              <Title className="text-xl text-tremor-content-title dark:text-dark-tremor-content-title font-semibold text-base leading-5">
                {name}
              </Title>
              <Flex className="mt-1 items-start justify-start ml-[10px]">
                {participants?.map((participant: AvatarCard, index: number) => (
                  <Avatar
                    key={`Avatar ${index} of ${name} by ${id}`}
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
                onClick={() => handleToggleAction(projectData.id)}>
                <Text className="w-[4px] h-[4px] rounded-full bg-secondary" />
                <Text className="w-[4px] h-[4px] rounded-full bg-secondary" />
                <Text className="w-[4px] h-[4px] rounded-full bg-secondary" />
              </Flex>
              {openActionProject && (
                <div className="absolute px-[18px] py-2 right-[26px] top-[3px] z-10 bg-white rounded-md shadow-md">
                  {actions.map(item => (
                    <Flex key={item.key} flex-col>
                      <Button
                        className="w-full justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-[#f0f2f5] hover:rounded-md px-1 py-[6px]"
                        variant="light"
                        onClick={() => handleItemActionProject()}>
                        <Text className="font-normal text-sm text-secondary">
                          {item.label}
                        </Text>
                      </Button>
                    </Flex>
                  ))}
                </div>
              )}
            </Flex>
          </Flex>
          <Text className="text-md text-secondary my-4 font-light dark:text-dark-tremor-content-romance">
            {description}
          </Text>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 my-4" />
          <Flex className="my-4">
            <div>
              <Text className="text-primary font-semibold dark:text-dark-tremor-content-title">
                {participantNumber}
              </Text>
              <Text className="text-secondary font-normal">Participants</Text>
            </div>
            <div>
              <Text className="text-primary font-semibold dark:text-dark-tremor-content-title">
                {duaDateFormat}
              </Text>
              <Text className="text-secondary font-normal">Due date</Text>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
