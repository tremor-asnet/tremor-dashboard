"use client";

import { METADATA, VARIANT_BUTTON } from "@/constants";
// Import libs
import { Flex } from "@tremor/react";
import Image from "next/image";

// Components
import { Button, Popover } from "@/ui/components";

const PaymentDetails = ({ cardLast4Digit }: { cardLast4Digit: string }) => {
  return (
    <div>
      <h6 className="text-tremor-content-title dark:text-dark-primary font-bold">
        Payment Details
      </h6>
      <Flex className="p-6 mt-4 border-[#dee2e6] rounded-lg border">
        <Flex justifyContent="start">
          <Image
            className="mr-4"
            src={METADATA.MASTERCARD}
            alt="master card icon"
            width="38"
            height="28"
          />
          <h6 className="text-tremor-content-title dark:text-dark-primary font-bold">
            **** **** **** {cardLast4Digit}
          </h6>
        </Flex>
        <div className="group relative">
          <Popover
            content="We do not store card details"
            className="text-center !bg-black !bottom-[-50px] min-w-[200px] rounded-md text-white right-[-50px] sm:right-[-60px] lg:right-[-82px] before:content-['▲'] before:absolute before:top-[-15px] before:right-[54px] sm:before:right-[64px] lg:before:right-[86px] before:text-[black]">
            <Button
              variant={VARIANT_BUTTON.LIGHT}
              additionalClass="w-6 h-6 text-dark-tremor-content-slate dark:text-dark-tremor-content-slate dark:hover:text-dark-tremor-content-slate bg-transparent border border-dark-tremor-content-slate rounded-full outline outline-2 outline-transparent focus:outline-dark-tremor-content">
              !
            </Button>
          </Popover>
        </div>
      </Flex>
    </div>
  );
};

export default PaymentDetails;
