// Libs
import { ReactNode } from "react";

// Components
import { Card, Text, Flex, Title } from "@tremor/react";
import Avatar from "../../components/Avatar/Avatar";
import { SlackIcon } from "../../components/Icons/SlackIcon";

//Constans
import {
  ITEM_ACTION_PROJECT,
  URL_AVATAR_PROJECT,
} from "../../constants/commons";

type AvatarCard = {
  key: string;
  src: string;
};

type AcionCard = {
  key: string;
  label: string;
};

interface IProjectCard {
  title: string;
  description: string;
  participant: number;
  date: string;
  icon: ReactNode;
  avatars: AvatarCard[];
  actions: AcionCard[];
  handletToggleAction: () => void;
  isOpenAction: boolean;
}

const ProjectCard = ({
  icon = <SlackIcon />,
  title = "Slack Bot",
  date = "02.03.22",
  participant = 5,
  description = "If everything I did failed - which it doesn't, I think that it actually succeeds.",
  avatars = URL_AVATAR_PROJECT,
  actions = ITEM_ACTION_PROJECT,
  isOpenAction,
  handletToggleAction,
}: IProjectCard): JSX.Element => {
  return (
    <div className="antialiased items-center justify-between px-4 py-1">
      <div className="flex items-center">
        <Card className="mx-auto px-4 py-1 ring-0 max-w-[350px] border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="absolute top-[-22px] left-40px w-[74px] h-[74px] p-1 bg-black justify-center rounded-xl">
            {icon}
          </Flex>
          <Flex className="pl-[90px] mb-6 relative">
            <Flex className="flex-col items-start justify-start ">
              <Title className="text-xl font-bold text-base">{title}</Title>
              <Flex className="items-start justify-start">
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
            <Flex className="flec-col justify-end">
              <Flex
                className="flex-col w-[30px] h-[16px] justify-between"
                onClick={handletToggleAction}>
                <Text className="w-[4px] h-[4px] rounded-full bg-black" />
                <Text className="w-[4px] h-[4px] rounded-full bg-black" />
                <Text className="w-[4px] h-[4px] rounded-full bg-black" />
              </Flex>
              {isOpenAction && (
                <div className="absolute px-[21px] py-3 right-[26px] top-[5px] z-10 bg-white rounded-md shadow-md">
                  {actions.map(item => (
                    <div className="py-1" key={item.key}>
                      <Text>{item.label}</Text>
                    </div>
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
