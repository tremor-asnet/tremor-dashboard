// Constants
import { STATUS_TEXT } from "@/constants";

// Components
import { Text } from "@tremor/react";
import { default as ProductStatus } from "./ProductStatus";

interface CustomStatusProps {
  status: number;
}

const CustomStatus = ({ status }: CustomStatusProps) => (
  <div className="flex justify-start items-center text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
    <ProductStatus status={status} />
    <Text className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
      {STATUS_TEXT[status]}
    </Text>
  </div>
);

export default CustomStatus;
