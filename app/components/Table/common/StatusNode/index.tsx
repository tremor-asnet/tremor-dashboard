// Constants
import { STATUS_TEXT } from "@/constants";

// Helpers
import { ProductStatus } from "@/helpers";

interface StatusNodeProps {
  status: number;
}

const StatusNode = ({ status }: StatusNodeProps) => (
  <div className="flex justify-start items-center text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
    {ProductStatus(status)}
    <p className="text-xs dark:text-white font-semibold leading-[15px] tracking-[0.4px] capitalize order-status">
      {STATUS_TEXT[status]}
    </p>
  </div>
);

export default StatusNode;
