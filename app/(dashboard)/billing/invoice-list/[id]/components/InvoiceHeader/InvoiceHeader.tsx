// Libs
import Link from "next/link";
import Image from "next/image";

//Components
import { Flex } from "@tremor/react";
import InvoiceLogo from "../InvoiceLogo/InvoiceLogo";

// Constants
import { IMAGE_TO_PRINT } from "@/constants";

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
    <Flex className="flex-col md:flex-row mb-10 md:mb-20">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[35%]">
        <Image
          src={IMAGE_TO_PRINT}
          alt="print-logo"
          width={80}
          height={80}
          className="hidden print:block"
        />
        <InvoiceLogo additionalClasses="w-20 h-20 md:w-10 md:h-10 print:hidden" />
        <p className="text-primary text-base dark:text-white font-semibold leading-6 tracking-wide mt-7">
          {renderAddressBankInfo}
        </p>
        <Link
          href={`tel:${phoneBank}`}
          className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-6 md:mb-4">
          tel: {phoneBank}
        </Link>
      </Flex>
      <Flex flexDirection="col" className="items-start md:items-end md:mt-0">
        <p className="text-primary text-base dark:text-white font-semibold leading-6 tracking-wide">
          Billed to: {fullName}
        </p>
        <p className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right">
          {addressCustomer}
          <br /> {cityCustomer} {stateCode}
          <br /> {stateCustomer}
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
