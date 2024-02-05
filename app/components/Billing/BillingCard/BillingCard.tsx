"use client";

// Libs
import { Flex, Text, Title } from "@tremor/react";
import Image from "next/image";

//Icons
import { MdWifi } from "react-icons/md";

// Constants
import { METADATA } from "@/constants";

//Styles
import "@/styles/billing.css";

const BillingCard = ({
  cardDigit,
  cardHolder,
  expires,
}: {
  cardDigit: string;
  cardHolder: string;
  expires: string;
}) => {
  return (
    <Flex
      alignItems="center"
      className="relative text-white bg-gradient-primary dark:bg-gradient-pickled p-0 rounded-lg">
      <div className="w-full h-full absolute top-0 left-0 opacity-20 bg-cover bg-billing-card"></div>
      <Flex
        flexDirection="col"
        justifyContent="start"
        alignItems="center"
        className="p-4">
        <Flex>
          <MdWifi className="text-2xl m-2 mb-8" />
        </Flex>
        <Flex className="text-xl text-white font-bold mb-12">{cardDigit}</Flex>
        <Flex>
          <Flex>
            <Flex flexDirection="col" alignItems="start">
              <Text className="text-whtie opacity-80 tracking-[0.4px]">
                Card Holder
              </Text>
              <Title className="text-white font-semibold tracking-[0.12px]">
                {cardHolder}
              </Title>
            </Flex>
            <Flex flexDirection="col" alignItems="start">
              <Text className="text-whtie opacity-80 tracking-[0.4px]">
                Expires
              </Text>
              <Title className="text-white font-semibold tracking-[0.12px]">
                {expires}
              </Title>
            </Flex>
          </Flex>
          <Flex justifyContent="end">
            <Image
              src={METADATA.MASTERCARD}
              alt="master card icon"
              width="55"
              height="41"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BillingCard;
