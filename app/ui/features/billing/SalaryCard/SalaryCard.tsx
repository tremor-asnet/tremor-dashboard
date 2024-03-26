"use client";

import { useState } from "react";

//Components
import { GrPaypal } from "react-icons/gr";
import { Card, Text, Flex, Button, Divider } from "@tremor/react";
import { IconBox } from "@/ui/components";

// Icons
import { MdAccountBalance } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

// Helpers
import { moneyFormat } from "@/helpers";

// Constants
import {
  CURRENCY,
  AGGREGATION_TYPE,
  AGGREGATION_DESCRIPTION,
} from "@/constants";

// Types
import { SalaryCardData } from "@/types";

import { usePinCode } from "@/context/pincode";

const SalaryCard = ({
  type,
  value,
  currency = CURRENCY.DOLLAR,
}: SalaryCardData): JSX.Element => {
  const { isConfirmPinCode, hidePinCodeModal, showPinCodeModal } = usePinCode();

  const [isShowAmount, setIsShowAmount] = useState(false);
  const isSalary = type === AGGREGATION_TYPE.SALARY;
  const description = isSalary
    ? AGGREGATION_DESCRIPTION.SALARY
    : AGGREGATION_DESCRIPTION.PAYPAL;
  const icon = isSalary ? (
    <MdAccountBalance color="white" size="23px" />
  ) : (
    <GrPaypal color="white" size="18px" />
  );

  const toggleShowHide = () => {
    setIsShowAmount(prev => !prev);
    isConfirmPinCode ? hidePinCodeModal() : showPinCodeModal();
  };

  return (
    <div className="w-full font-primary antialiased items-center justify-between">
      <div className="flex items-center">
        <Card className="bg-tremor-primary dark:bg-dark-tremor-primary mx-auto pt-3 pb-4 px-4 ring-0 max-w-full lg:max-w-[356px] 2xl:max-w-full border-none relative rounded-xl shadow-md">
          <Flex flexDirection="col">
            <IconBox className="bg-gradient-pickled" icon={icon} />
            <Flex flexDirection="col" className="mt-4 mb-1">
              <Text className="mb-1 text-primary dark:text-lighter text-tremor-title leading-[33px] tracking-[0.1764px] font-semibold">
                {type}
              </Text>
              <Text className="text-xs dark:text-dark-romance text-primary font-light">
                {description}
              </Text>
            </Flex>
          </Flex>
          <Divider className="opacity-25 dark:opacity-15 my-4" />
          <Flex flexDirection="col" className="gap-4">
            <Button
              variant="light"
              icon={isConfirmPinCode && isShowAmount ? FaRegEyeSlash : FaRegEye}
              onClick={toggleShowHide}
              className="text-primary hover:text-primary dark:text-lighter dark:hover:text-lighter"
            />
            {isConfirmPinCode && isShowAmount ? (
              <Flex justifyContent="center">
                {isSalary && (
                  <Text className="text-primary text-xl dark:text-lighter font-semibold">
                    +
                  </Text>
                )}
                <Text className="text-primary text-xl dark:text-lighter font-semibold">
                  {moneyFormat({
                    value: value,
                    currency: currency,
                  })}
                </Text>
              </Flex>
            ) : (
              <Text className="text-primary text-xl dark:text-lighter font-semibold">
                *****
              </Text>
            )}
          </Flex>
        </Card>
      </div>
    </div>
  );
};

export default SalaryCard;
