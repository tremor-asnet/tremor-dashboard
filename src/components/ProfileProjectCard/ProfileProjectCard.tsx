import Image from "next/image";

import Avatar from "@/components/Avatar/Avatar";
import { Title, Text, Flex, Button } from "@tremor/react";

interface ProfileProjectCardProps {
  projectSrc: string;
  avatarSrc: string;
  name: string;
  desc: string;
  hashtag: string;
}

const ProfileProjectCard = ({
  name = "Richard Davis",
  desc = "CEO / Co-Founder",
  hashtag = "#1",
  projectSrc = "/assets/images/profile-project.webp",
  avatarSrc = "/images/avatar/avatar-xs.webp",
}: ProfileProjectCardProps) => {
  return (
    <Flex className="justify-start flex-col items-start pt-12 pl-12 xl:max-w-[50%] xl:basis-1/2 xl:max-w-[25%] xl:basis-1/4">
      <Flex>
        <Image
          className="rounded-xl shadow-lg"
          src={projectSrc}
          width={315}
          height={180}
          alt="Project"
        />
      </Flex>
      <Flex className="justify-start flex-col items-start w-[calc(100%-1rem)] pt-4 px-2">
        <Text className="capitalize">Project {hashtag}</Text>
        <Title className="font-bold text-xl capitalize mb-2">{name}</Title>
        <Text className="flex-wrap font-light mb-6">{desc}</Text>
        <Flex className="justify-between">
          <Button
            className="font-sans font-bold bg-inherit text-tremor-content-seldom text-xs hover:bg-transparent hover:opacity-75"
            variant="secondary">
            View Project
          </Button>
          <div className="container-avatars">
            <Avatar
              alt="Avatar extra small"
              className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
              height={20}
              priority
              src={avatarSrc}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={20}
            />
            <Avatar
              alt="Avatar extra small"
              className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
              height={20}
              priority
              src={avatarSrc}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={20}
            />
            <Avatar
              alt="Avatar extra small"
              className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
              height={20}
              priority
              src={avatarSrc}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={20}
            />
            <Avatar
              alt="Avatar extra small"
              className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
              height={20}
              priority
              src={avatarSrc}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={20}
            />
            <Avatar
              alt="Avatar extra small"
              className="relative border-2 border-white border-solid ml-[-10px] cursor-pointer hover:z-10"
              height={20}
              priority
              src={avatarSrc}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={20}
            />
          </div>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileProjectCard;
