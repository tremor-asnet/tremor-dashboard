// Components
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/Avatar/Avatar";
import { Title, Text, Flex, Button } from "@tremor/react";

// Constants
import { ROUTES } from "@/constants/routes";

interface AvatarProps {
  name: string;
  avatar: string;
}

interface ProjectCard {
  id: number;
  cover: string;
  primaryName: string;
  description: string;
  secondaryName: string;
  participants: AvatarProps[];
}

interface ProjectInfoCardProps {
  links: ProjectCard[];
}

export const ProjectInfoCard = ({ links }: ProjectInfoCardProps) => {
  const renderProjectCards = links.map(
    ({ id, cover, description, participants, primaryName, secondaryName }) => (
      <Flex key={id} className="justify-start flex-col items-start">
        <Flex>
          <Image
            className="w-full rounded-xl shadow-lg"
            src={cover}
            width={315}
            height={180}
            alt={primaryName}
          />
        </Flex>
        <Flex className="justify-start flex-col items-start pt-4 px-2">
          <Text className="capitalize font-normal dark:text-dark-tremor-content-romance">
            {secondaryName}
          </Text>
          <Title className="w-full font-bold text-xl capitalize mb-2 text-primary dark:text-dark-primary">
            <Link href={ROUTES.PROJECTS}>{primaryName}</Link>
          </Title>
          <Text className="flex-wrap font-light mb-6 dark:text-dark-tremor-content-romance">
            {description}
          </Text>
          <Flex className="flex flex-wrap">
            <Link href={ROUTES.PROJECTS}>
              <Button
                className="font-sans bg-inherit hover:bg-transparent hover:opacity-75 py-[7px] px-4"
                variant="secondary">
                <Text className="font-bold text-seldom text-xs uppercase leading-[17px] dark:text-dark-tremor-content-seldom">
                  View Project
                </Text>
              </Button>
            </Link>
            <div className="container-avatars min-w-[56px] flex flex-nowrap ml-3">
              {participants.map(({ name, avatar }) => (
                <Avatar
                  key={`${name}-${id}`}
                  alt={name}
                  className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
                  width={20}
                  height={20}
                  priority
                  src={avatar}
                  sizes="100%"
                />
              ))}
            </div>
          </Flex>
        </Flex>
      </Flex>
    ),
  );

  return (
    <Flex className="flex-wrap justify-start flex-row items-start gap-y-12 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {renderProjectCards}
    </Flex>
  );
};

export default ProjectInfoCard;
