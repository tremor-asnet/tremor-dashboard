//Components
import { Flex } from "@tremor/react";
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
    <Flex className="flex-col md:flex-row">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[33%]">
        <InvoiceLogo width={16} height={16} />
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide mt-6">
          {renderAddressBankInfo}
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-4">
          {phoneBank}
        </p>
      </Flex>
      <Flex
        flexDirection="col"
        className="items-start md:items-end mt-10 md:mt-0">
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide">
          Billed to: {fullName}
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right">
          {addressCustomer}
          <br /> {cityCustomer} {stateCode}
          <br /> {stateCustomer}
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
