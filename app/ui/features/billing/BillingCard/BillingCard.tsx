"use client";

import { useState } from "react";
import Image from "next/image";

// Components
import { Button, Flex, Text, Title } from "@tremor/react";

//Icons
import { MdWifi } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

// Constants
import { METADATA } from "@/constants";

//Styles
import "@/styles/billing.css";

const BillingCard = ({
  cardNumber,
  holderFullName,
  expire,
  cardLast4Digit,
}: {
  cardNumber: string;
  holderFullName: string;
  expire: string;
  cardLast4Digit: string;
}) => {
  const [isShowAmount, setIsShowAmount] = useState(false);

  const toggleShowHide = () => {
    setIsShowAmount(!isShowAmount);
  };

  return (
    <Flex
      alignItems="center"
      className="relative text-white bg-gradient-primary dark:bg-gradient-pickled p-0 rounded-lg min-h-[236px] shadow-[rgba(0,0,0,0.1)_0rem_1.25rem_1.5625rem_-0.3125rem,rgba(0,0,0,0.04)_0rem_0.625rem_0.625rem_-0.3125rem]">
      <div className="w-full h-full absolute top-0 left-0 opacity-20 bg-cover bg-billing-card z-0"></div>
      <Flex
        flexDirection="col"
        justifyContent="start"
        alignItems="center"
        className="p-4 z-10">
        <Flex>
          <MdWifi className="text-2xl m-2" />
        </Flex>
        <Flex className="mt-6 mb-8 gap-4">
          <Text className="text-xl text-white font-bold">
            {isShowAmount ? cardNumber : `**** **** **** ${cardLast4Digit}`}
          </Text>
          <Button
            variant="light"
            icon={isShowAmount ? FaRegEyeSlash : FaRegEye}
            onClick={toggleShowHide}
            className="text-white hover:text-white dark:text-white dark:hover:text-white"
          />
        </Flex>
        <Flex className="2xl:py-[5px]">
          <Flex>
            <Flex
              flexDirection="col"
              alignItems="start"
              className="min-w-[138px]">
              <Text className="text-whtie opacity-80 tracking-[0.4px] ">
                Card Holder
              </Text>
              <Title className="text-white font-semibold tracking-[0.12px]">
                {holderFullName}
              </Title>
            </Flex>
            <Flex flexDirection="col" alignItems="start">
              <Text className="text-whtie opacity-80 tracking-[0.4px]">
                Expires
              </Text>
              <Title className="text-white font-semibold tracking-[0.12px]">
                {expire}
              </Title>
            </Flex>
          </Flex>
          <Flex justifyContent="end">
            <Image
              src={METADATA.MASTERCARD}
              alt="master card icon"
              width="40"
              height="30"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BillingCard;
