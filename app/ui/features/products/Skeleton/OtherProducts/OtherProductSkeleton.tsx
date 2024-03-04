import { Bold } from "@tremor/react";

const OtherProductSkeleton = () => (
  <div className="w-full">
    <Bold className="text-primary text-tremor-primary font-semibold dark:text-white">
      Other Products
    </Bold>
    <div className="w-full h-96 mt-5 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
  </div>
);

export default OtherProductSkeleton;
