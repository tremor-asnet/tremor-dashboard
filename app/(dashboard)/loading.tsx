import { LoadingIndicator } from "@/components";
import { Flex } from "@tremor/react";

const Loading = () => {
  return (
    <Flex className="grow w-full items-center justify-center">
      <Flex flexDirection="col" className="grow w-full h-full items-center">
        <LoadingIndicator width={16} height={16} fillColor="river-bed-500" />
        <h2 className="mt-2 text-gray-400">Loading</h2>
      </Flex>
    </Flex>
  );
};

export default Loading;
