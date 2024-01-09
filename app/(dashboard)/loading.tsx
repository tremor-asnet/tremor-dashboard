import { LoadingIndicator } from "@/ui/components";
import { Flex } from "@tremor/react";

const Loading = () => {
  return (
    <Flex className="grow w-full items-center justify-center">
      <Flex flexDirection="col" className="grow w-full h-full items-center">
        <LoadingIndicator width="w-16" height="w-16" />
        <h2 className="mt-2 text-gray-400">Loading</h2>
      </Flex>
    </Flex>
  );
};

export default Loading;
