"use client";

import { Button, Flex, Text } from "@tremor/react";

// Components
import { Avatar } from "@/components";

interface ConversationItemProps {
  src: string;
  alt?: string;
  name: string;
  description: string;
}

const ConversationItem = ({
  src,
  alt = "",
  name,
  description,
}: ConversationItemProps) => (
  <Flex className="mb-2 py-2 flex-wrap xs:flex-nowrap">
    <Flex className="justify-start flex-wrap sm:flex-nowrap">
      <div className="w-12 h-12">
        <Avatar src={src} width={48} height={48} alt={alt} />
      </div>
      <div className="max-w-[180px] font-medium dark:text-white pl-4">
        <Text className="text-sm text-primary font-semibold">{name}</Text>
        <Text className="text-xs text-secondary font-light truncate">
          {description}
        </Text>
      </div>
    </Flex>
    <Button className="min-w-[64px] m-0 border-0 hover:bg-[none] bg-transparent">
      <Text className="text-primary text-xs text-center font-bold uppercase leading-[17px]">
        Reply
      </Text>
    </Button>
  </Flex>
);

export default ConversationItem;
