//Components
import { Flex } from "@tremor/react";
import InvoiceLogo from "@/components/Invoice/InvoiceLogo/InvoiceLogo";

interface BankInfo {
  address: string;
  city: string;
  state: string;
  phone: string;
}

interface Customer {
  fullName: string;
  address: string;
  city: string;
  stateCode: string;
  state: string;
}

interface InvoiceHeaderProps {
  bankInfo: BankInfo;
  customer: Customer;
}

export const InvoiceHeader = ({ bankInfo, customer }: InvoiceHeaderProps) => {
  const renderAddressBankInfo = `${bankInfo.address} ${bankInfo.city}, ${bankInfo.state}`;

  return (
    <Flex className="flex-col md:flex-row">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[33%]">
        <InvoiceLogo width={16} height={16} />
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide mt-6">
          {renderAddressBankInfo}
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-4">
          {bankInfo.phone}
        </p>
      </Flex>
      <Flex
        flexDirection="col"
        className="items-start md:items-end mt-10 md:mt-0">
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide">
          Billed to: {customer.fullName}
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right">
          {customer.address}
          <br /> {customer.city} {customer.stateCode}
          <br /> {customer.state}
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
