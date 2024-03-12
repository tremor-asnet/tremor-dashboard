import { Flex } from "@tremor/react";
import { LoadingIndicator } from "@/ui/components";

const LoadingPage = ({
  width = 16,
  height = 16,
  fillColor = "river-bed-500",
}: {
  width?: number;
  height?: number;
  isFullWidth?: boolean;
  fillColor?: string;
  additionalClass?: string;
}) => (
  <Flex justifyContent="center" className="grow w-full">
    <Flex flexDirection="col" className="grow w-full h-full">
      <LoadingIndicator width={width} height={height} fillColor={fillColor} />
      <h2 className="mt-2 text-gray-400">Loading</h2>
    </Flex>
  </Flex>
);

export default LoadingPage;
