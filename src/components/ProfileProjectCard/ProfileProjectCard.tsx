// Components
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/components/Avatar/Avatar";
import { Title, Text, Flex, Button } from "@tremor/react";

// Constants
import { ROUTES } from "@/constants/routes";

export interface AvatarProps {
  avatar: string;
}

export interface IProjectCard {
  id: number;
  cover: string;
  primaryName: string;
  description: string;
  secondaryName: string;
  participants: AvatarProps[];
}
interface ProfileProjectCardProps {
  links: IProjectCard[];
}

const ProfileProjectCard = ({ links }: ProfileProjectCardProps) => {
  const renderProjectCards = (): JSX.Element[] => {
    return links.map(link => (
      <>
        <Flex key={link.id} className="justify-start flex-col items-start">
          <Flex>
            <Image
              className="w-full rounded-xl shadow-lg"
              src={link.cover}
              width={315}
              height={180}
              alt="Project"
            />
          </Flex>
          <Flex className="justify-start flex-col items-start pt-4 px-2">
            <Text className="capitalize">Project {link.secondaryName}</Text>
            <Title className="w-full font-bold text-xl capitalize mb-2">
              <Link href={ROUTES.HOME} className="block">
                {link.primaryName}
              </Link>
            </Title>
            <Text className="flex-wrap font-light mb-6">
              {link.description}
            </Text>
            <Flex className="justify-between">
              <Button
                className="font-sans bg-inherit hover:bg-transparent hover:opacity-75 py-[7px] px-4"
                variant="secondary">
                <Text className="font-bold text-seldom text-xs uppercase leading-[17px]">
                  View Project
                </Text>
              </Button>
              <div className="container-avatars">
                {link.participants.map(({ avatar }: AvatarProps) => (
                  <>
                    <Avatar
                      alt="Avatar extra small"
                      className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
                      height={20}
                      priority
                      src={avatar}
                      width={20}
                      sizes="100%"
                    />
                  </>
                ))}
              </div>
            </Flex>
          </Flex>
        </Flex>
      </>
    ));
  };
  return (
    <Flex className="flex-wrap justify-start flex-row items-start gap-y-12 md:grid md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8 2xl:grid-cols-4">
      {renderProjectCards()}
    </Flex>
  );
};

export default ProfileProjectCard;
