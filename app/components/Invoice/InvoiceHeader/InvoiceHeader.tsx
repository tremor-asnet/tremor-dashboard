//Components
import { Flex } from "@tremor/react";
import InvoiceLogo from "@/components/Invoice/InvoiceLogo/InvoiceLogo";

import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const InvoiceHeader = () => {
  return (
    <Flex className="flex-col md:flex-row">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[33%]">
        <InvoiceLogo width={16} height={16} />
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide mt-6">
          St. Independence Embankment, 050105 Bucharest, Romania
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide mt-2 mb-4">
          tel: +4 (074) 1090873
        </p>
      </Flex>
      <Flex
        flexDirection="col"
        className="items-start md:items-end mt-10 md:mt-0">
        <p className="text-primary dark:text-white font-bold leading-6 tracking-wide">
          Billed to: John Doe
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-6 tracking-wide md:text-right">
          4006 Locust View Drive
          <br /> San Francisco CA
          <br /> California
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
