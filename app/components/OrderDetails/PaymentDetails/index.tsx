"use client";

// Components
import { Flex, Bold } from "@tremor/react";
import Image from "next/image";

// Constants
import { METADATA } from "@/constants";

const PaymentDetails = () => {
  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Payment Details
      </Bold>
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
          <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
            **** **** **** 7852
          </Bold>
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
    </>
  );
};

export default PaymentDetails;
