// Constants
import { STATUS_TEXT } from "@/constants";

// Helpers
import { ProductStatus } from "@/helpers";

interface CustomStatusProps {
  status: number;
}

export const CustomStatus = ({ status }: CustomStatusProps) => (
  <div className="1234 flex justify-start items-center text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
    {ProductStatus(status)}
    <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
      {STATUS_TEXT[status]}
    </p>
  </div>
);
