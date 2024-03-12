// Libs
import Link from "next/link";

//Components
import { Flex, Title, Text } from "@tremor/react";
import InvoiceLogo from "../InvoiceLogo/InvoiceLogo";

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
  const renderAddressBankInfo = `${addressBank} ${cityBank}, ${stateBank}`;

  return (
    <Flex flexDirection="col" className="md:flex-row mb-10 md:mb-20">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[35%]">
        <InvoiceLogo additionalClasses="w-20 h-20 md:w-10 md:h-10" />{" "}
        <Title className="text-primary dark:text-white font-semibold leading-6 tracking-wide mt-7 dark:print:text-white">
          {renderAddressBankInfo}
        </Title>
        <Link
          href={`tel:${phoneBank}`}
          className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-6 md:mb-4 dark:print:text-dark-romance">
          tel: {phoneBank}
        </Link>
      </Flex>
      <Flex
        flexDirection="col"
        alignItems="start"
        className="md:items-end md:mt-0">
        <Title className="text-primary dark:text-white font-semibold leading-6 tracking-wide dark:print:text-white">
          Billed to: {fullName}
        </Title>
        <Text className="text-secondary text-tremor-title dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right dark:print:text-dark-romance">
          {addressCustomer}
          <br /> {cityCustomer} {stateCode}
          <br /> {stateCustomer}
        </Text>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
