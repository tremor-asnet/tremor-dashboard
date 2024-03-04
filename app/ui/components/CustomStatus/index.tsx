// Constants
import { STATUS_TEXT } from "@/constants";

// Components
import { ProductStatus } from "./ProductStatus";

interface CustomStatusProps {
  status: number;
}

export const CustomStatus = ({ status }: CustomStatusProps) => (
  <div className="flex justify-start items-center text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
    <ProductStatus status={status} />
    <p className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
      {STATUS_TEXT[status]}
    </p>
  </div>
);

export default CustomStatus;