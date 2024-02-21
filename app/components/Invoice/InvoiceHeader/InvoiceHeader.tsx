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
    <Flex className="flex-col md:flex-row mb-[40px] md:mb-20">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[35%]">
        <InvoiceLogo additionalClasses="w-20 h-20 md:w-10 md:h-10" />
        <p className="text-primary text-base dark:text-white font-semibold leading-6 tracking-wide mt-7">
          {renderAddressBankInfo}
        </p>
        <p className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-6 md:mb-4">
          tel: {bankInfo.phone}
        </p>
      </Flex>
      <Flex
        flexDirection="col"
        className="items-start md:items-end mt-11 md:mt-0">
        <p className="text-primary text-base dark:text-white font-semibold leading-6 tracking-wide">
          Billed to: {customer.fullName}
        </p>
        <p className="text-secondary text-base dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right max-w-full md:max-w-sm truncate">
          {customer.address}
          <br /> {customer.city} {customer.stateCode}
          <br /> {customer.state}
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
