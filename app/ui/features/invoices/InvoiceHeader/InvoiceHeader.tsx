"use client";

// Libs
import Link from "next/link";
import { useContext } from "react";

//Components
import { Flex, Title, Text } from "@tremor/react";
import { InvoiceLogo } from "..";

// Contexts
import { ThemeContext } from "@/context/theme";

// Themes
import { color } from "@/themes";

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

const InvoiceHeader = ({
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

  return (
    <Flex className="flex-col md:flex-row mb-10 md:mb-20">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[35%]">
        <InvoiceLogo
          color={isDarkTheme ? color.dark.primary : color.black}
          additionalClasses="browser-logo"
        />
        {/* Show this image when in print preview mode */}
        <InvoiceLogo color={color.black} additionalClasses="print-logo" />
        <Title className="text-primary dark:text-white font-semibold leading-6 tracking-wide mt-7 dark:print:text-primary">
          {renderAddressBankInfo}
        </Title>
        <Link
          href={`tel:${phoneBank}`}
          className="text-secondary print:text-black text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-6 md:mb-4 dark:print:text-black">
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
        <Text className="text-secondary print:text-black text-tremor-title dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right dark:print:text-black">
          {addressCustomer}
          <br /> {cityCustomer} {stateCode}
          <br /> {stateCustomer}
        </Text>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
