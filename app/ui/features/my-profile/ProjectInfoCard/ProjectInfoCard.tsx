// Components
import Link from "next/link";
import Image from "next/image";
import { Title, Text, Flex } from "@tremor/react";
import { Avatar, Button } from "@/ui/components";

// Constants
import { ROUTES } from "@/constants/routes";
import { VARIANT_BUTTON } from "@/constants";

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
      <Flex
        key={id}
        justifyContent="start"
        flexDirection="col"
        alignItems="start">
        <Flex>
          <Image
            className="w-full rounded-xl shadow-lg"
            src={cover}
            width={315}
            height={180}
            alt={primaryName}
          />
        </Flex>
        <Flex
          justifyContent="start"
          flexDirection="col"
          alignItems="start"
          className="pt-4 pl-2">
          <Text className="capitalize font-normal dark:text-dark-tremor-content-romance">
            {secondaryName}
          </Text>
          <Title className="w-full font-bold text-xl capitalize mb-2 text-primary dark:text-dark-primary">
            <Link href={ROUTES.PROJECTS}>{primaryName}</Link>
          </Title>
          <Text className="flex-wrap font-light mb-6 dark:text-dark-tremor-content-romance">
            {description}
          </Text>
          <Flex>
            <Link href={ROUTES.PROJECTS}>
              <Button
                additionalClass="font-sans bg-inherit hover:bg-transparent hover:opacity-75 py-[7px] px-4"
                variant={VARIANT_BUTTON.SECONDARY_SHADOW}
                variantTremor={VARIANT_BUTTON.SECONDARY}>
                <Text className="font-bold text-seldom text-xs leading-[17px] dark:text-dark-tremor-content-seldom">
                  View Project
                </Text>
              </Button>
            </Link>
            <div className="container-avatars min-w-[56px] flex justify-end flex-nowrap ml-3">
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
    <Flex
      justifyContent="start"
      alignItems="start"
      className="flex-wrap gap-y-12 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {renderProjectCards}
    </Flex>
  );
};

export default ProjectInfoCard;
