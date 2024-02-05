//Libs
import { LuLandmark } from "react-icons/lu";
import { GrPaypal } from "react-icons/gr";
import { Card, Text, Flex } from "@tremor/react";

//Components
import { IconBox } from "@/components";

// Helpers
import { formattedNumber } from "@/helpers";

// Constants
import {
  CURRENCY,
  AGGREGATION_TYPE,
  AGGREGATION_DESCRIPTION,
} from "@/constants";

interface SalaryCardData {
  value: number;
  type: AGGREGATION_TYPE;
}

interface SalaryCardDataProps {
  aggregation: SalaryCardData;
}

const SalaryCard = ({ aggregation }: SalaryCardDataProps): JSX.Element => {
  const { type = aggregation.type, value = aggregation.value } = aggregation;
  const isSalary = type === AGGREGATION_TYPE.SALARY;
  const description = isSalary
    ? AGGREGATION_DESCRIPTION.SALARY
    : AGGREGATION_DESCRIPTION.PAYPAL;
  const icon = isSalary ? (
    <LuLandmark color="white" size="20px" />
  ) : (
    <GrPaypal color="white" size="18px" />
  );

  return (
    <div className="font-primary antialiased items-center justify-between py-1">
      <div className="flex items-center">
        <Card className="bg-tremor-primary dark:bg-dark-tremor-primary mx-auto pt-3 pb-4 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative mt-[40px] rounded-xl shadow-md">
          <Flex className="flex-col">
            <IconBox className="shadow-box-icon-primary" icon={icon} />
            <Flex className="flex-col mt-4 mb-1">
              <Text className="mb-1 text-primary dark:text-lighter text-tremor-title leading-[33px] tracking-[0.1764px] font-semibold">
                {type}
              </Text>
              <Text className="text-xs dark:text-dark-romance text-primary font-light">
                {description}
              </Text>
            </Flex>
          </Flex>
          <div className="h-px bg-[linear-gradient(to_right,rgba(52,71,103,0),rgba(52,71,103,0.4),rgba(52,71,103,0))] opacity-25 dark:opacity-95 my-4" />
          <Flex className="justify-center items-center mt-5 mb-1">
            {isSalary && (
              <Text className="text-primary text-xl h-[30px] pr-0.5 dark:text-lighter font-semibold">
                +
              </Text>
            )}
            <Text className="text-primary text-xl dark:text-lighter font-semibold">
              {formattedNumber({
                value: value,
                currency: CURRENCY.DOLLAR,
              })}
            </Text>
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default SalaryCard;
