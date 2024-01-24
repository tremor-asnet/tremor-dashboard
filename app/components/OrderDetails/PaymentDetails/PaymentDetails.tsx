"use client";

import { METADATA } from "@/constants";
// Import libs
import { Flex } from "@tremor/react";
import Image from "next/image";

const PaymentDetails = ({ cardLast4Digit }: { cardLast4Digit: string }) => {
  return (
    <div>
      <h6 className="text-tremor-content-title dark:text-dark-primary font-bold">
        Payment Details
      </h6>
      <Flex
        alignItems="center"
        className="p-6 mt-4 border-[#dee2e6] rounded-lg border">
        <Flex justifyContent="start" alignItems="center">
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
        <div className="group">
          <span className="invisible absolute rounded-md bg-black text-white group-hover:visible p-2 text-xs -translate-x-1/2 translate-y-10 w-42">
            We do not store card details
          </span>
          <button className="w-6 h-6 text-dark-tremor-content-slate bg-transparent border border-dark-tremor-content-slate rounded-full outline outline-2 outline-transparent focus:outline-dark-tremor-content">
            !
          </button>
        </div>
      </Flex>
    </div>
  );
};

export default PaymentDetails;
