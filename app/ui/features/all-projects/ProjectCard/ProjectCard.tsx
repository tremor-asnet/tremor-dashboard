"use client";

//Libs
import { useState, RefObject } from "react";
import { Card, Text, Flex, Title, Button } from "@tremor/react";
import { FaEllipsisV } from "react-icons/fa";

//Components
import { CustomImage, Avatar } from "@/ui/components";

//Types
import { Project, AvatarCard } from "@/types";

//Constants
import {
  ITEM_ACTION_PROJECT,
  PLACEHOLDER_IMAGE,
  VARIANT_BUTTON,
} from "@/constants";

//Mocks
import { PROJECT_DATA } from "@/mocks/project";

//Helpers
import { formatDate } from "@/helpers";

// Hooks
import { useOutsideClick } from "@/hooks";

interface ActionCardProps {
  key: string;
  label: string;
}
interface ProjectCardProps {
  projectData: Project;
  actions: ActionCardProps[];
}

const ProjectCard = ({
  projectData = PROJECT_DATA[0],
  actions = ITEM_ACTION_PROJECT,
}: ProjectCardProps): JSX.Element => {
  const { cover, name, dueDate, participants, description, id } = projectData;
  const participantNumber = participants?.length;
  const duaDateFormat = formatDate(new Date(dueDate));
  const srcImageCard = cover ? cover : PLACEHOLDER_IMAGE;

  const [isOpenAction, setOpenAction] = useState(false);
  const [currentProjectId, setCurrentProjectId] = useState("");
  const openActionProject = isOpenAction && id === currentProjectId;

  const projectCardRef = useOutsideClick(() => {
    setOpenAction(false);
  });

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
        <Card
          className="dark:bg-dark-tremor-primary mx-auto px-4 py-1 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md"
          ref={projectCardRef as RefObject<HTMLDivElement>}>
          <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-gradient-arsenic justify-center rounded-xl dark:bg-gradient-pickled">
            <CustomImage
              src={srcImageCard}
              width={60}
              height={60}
              alt={`${name}-cover`}
              priority
              className="rounded-md"
            />
          </Flex>
          <Flex className="pl-[90px] mb-6 mt-1 relative">
            <Flex flexDirection="col" alignItems="start" justifyContent="start">
              <Title className="text-xl text-tremor-content-title dark:text-dark-tremor-content-title font-semibold text-base leading-5">
                {name}
              </Title>
              <Flex
                justifyContent="start"
                alignItems="start"
                className="mt-1 ml-[10px]">
                {participants?.map((participant: AvatarCard, index: number) => (
                  <Avatar
                    key={`Avatar ${index} of ${name} by ${id}`}
                    alt="Avatar extra small"
                    className="border-2 border-white border-solid ml-[-10px] w-6 h-6 min-w-[24px]"
                    height={20}
                    priority
                    src={participant?.avatar}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    width={20}
                  />
                ))}
              </Flex>
            </Flex>
            <Flex flexDirection="col" justifyContent="end" className="w-auto">
              <Flex
                flexDirection="col"
                className="cursor-pointer w-[30px] h-[16px]"
                onClick={() => handleToggleAction(projectData.id)}>
                <FaEllipsisV className="text-secondary dark:text-secondary" />
              </Flex>
              {openActionProject && (
                <div className="absolute p-2 right-[26px] top-[3px] z-10 bg-white dark:bg-dark-tremor-primary rounded-md shadow-md dark:shadow-select-option">
                  {actions.map(item => (
                    <Flex key={item.key}>
                      <Button
                        className="w-full justify-start text-tremor-content-title hover:text-tremor-content-title hover:bg-body dark:hover:bg-dark-secondary hover:rounded-md py-[6px]"
                        variant={VARIANT_BUTTON.LIGHT}
                        onClick={() => handleItemActionProject()}>
                        <Text className="px-3 font-normal text-sm text-secondary dark:text-lighter hover:text-primary dark:hover:text-white">
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
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] dark:bg-gradient-divider opacity-25 my-4" />
          <Flex className="my-4">
            <div>
              <Text className="text-primary font-semibold dark:text-dark-tremor-content-title">
                {participantNumber}
              </Text>
              <Text className="text-secondary dark:text-secondary font-normal">
                Participants
              </Text>
            </div>
            <div>
              <Text className="text-primary font-semibold dark:text-dark-tremor-content-title">
                {duaDateFormat}
              </Text>
              <Text className="text-secondary dark:text-secondary font-normal">
                Due date
              </Text>
            </div>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default ProjectCard;
