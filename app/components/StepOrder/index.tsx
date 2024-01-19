import { StepOrderProps } from "@/types/orderDetail";

const StepOrder = ({
  iconInfo,
  titleInfo,
  descriptionInfo,
  className,
  backgroundColor,
}: StepOrderProps) => (
  <li className={`relative h-fit ${className}`}>
    <div className="flex justify-start px-6 pt-6 leading-[1.3rem] after:content-['']">
      <span
        className={`mr-3 flex h-8 w-8 items-center justify-center rounded-full ${backgroundColor} text-sm font-medium text-dark-primary`}>
        {iconInfo}
      </span>
      <div className="flex flex-col">
        <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-dark-primary">
          {titleInfo}
        </span>
        <span className="text-tremor-label text-primary font-light dark:text-dark-romance">
          {descriptionInfo}
        </span>
      </div>
    </div>
  </li>
);

export default StepOrder;
