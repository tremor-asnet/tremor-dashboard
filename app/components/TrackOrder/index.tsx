import { Bold, Card } from "@tremor/react";

// Icon React
import { IoMdCheckmark } from "react-icons/io";

// Components
import { StepOrder } from "@/components";

// Types
import { StepOrderProps } from "@/types";

interface TrackOrderProps {
  data: StepOrderProps[];
  descriptionInfo: string;
  deliveredAt: string;
}

const TrackOrder = ({
  data,
  descriptionInfo,
  deliveredAt,
}: TrackOrderProps) => {
  return (
    <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0 pt-6">
      <Bold className="dark:text-white mb-4 pl-6">Track order</Bold>
      <ul className="relative m-0 w-full p-0 pb-6">
        {data.map(item => {
          const { iconInfo, titleInfo } = item;
          return (
            <>
              <StepOrder
                className="after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-[1px] after:h-[calc(100%-2.25rem)] after:w-[0.125rem] after:bg-border after:content-['']"
                backgroundColor="bg-light"
                iconInfo={iconInfo}
                titleInfo={titleInfo}
                descriptionInfo={descriptionInfo}
              />
            </>
          );
        })}
        <StepOrder
          backgroundColor="bg-few"
          iconInfo={<IoMdCheckmark />}
          titleInfo="Order delivered"
          descriptionInfo={deliveredAt}
        />
      </ul>
    </Card>
  );
};

export default TrackOrder;
