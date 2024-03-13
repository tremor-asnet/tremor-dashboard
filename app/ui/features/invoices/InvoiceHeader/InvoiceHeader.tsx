"use client";

// Libs
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

//Components
import { Flex, Title, Text } from "@tremor/react";

// Constants
import { IMAGE_TO_PRINT } from "@/constants";

// Contexts
import { ThemeContext } from "@/context/theme";

interface InvoiceHeaderProps {
  addressBank: string;
  cityBank: string;
  stateBank: string;
  phoneBank: string;
  fullName: string;
  addressCustomer: string;
  cityCustomer: string;
  stateCode: string;
  stateCustomer: string;
}

export const InvoiceHeader = ({
  addressBank,
  cityBank,
  stateBank,
  phoneBank,
  fullName,
  addressCustomer,
  cityCustomer,
  stateCode,
  stateCustomer,
}: InvoiceHeaderProps) => {
  const { isDarkTheme } = useContext(ThemeContext);

  const renderAddressBankInfo = `${addressBank} ${cityBank}, ${stateBank}`;
  const srcImg = isDarkTheme
    ? IMAGE_TO_PRINT.DARK_MODE
    : IMAGE_TO_PRINT.LIGHT_MODE;

  return (
    <Flex className="flex-col md:flex-row mb-10 md:mb-20">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[35%]">
        <Image
          src={srcImg}
          alt="print-logo"
          width={50}
          height={50}
          className="block print:hidden"
        />
        {/* Show this image when in print preview mode */}
        <Image
          src={IMAGE_TO_PRINT.LIGHT_MODE}
          alt="print-logo"
          width={50}
          height={50}
          className="print-logo hidden"
        />
        <Title className="text-primary dark:text-white font-semibold leading-6 tracking-wide mt-7 dark:print:text-primary">
          {renderAddressBankInfo}
        </Title>
        <Link
          href={`tel:${phoneBank}`}
          className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-6 md:mb-4 dark:print:text-secondary">
          tel: {phoneBank}
        </Link>
      </Flex>
      <Flex
        flexDirection="col"
        alignItems="start"
        className="md:items-end md:mt-0">
        <Title className="text-primary dark:text-white font-semibold leading-6 tracking-wide dark:print:text-primary">
          Billed to: {fullName}
        </Title>
        <Text className="text-secondary text-tremor-title dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right dark:print:text-secondary">
          {addressCustomer}
          <br /> {cityCustomer} {stateCode}
          <br /> {stateCustomer}
        </Text>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
