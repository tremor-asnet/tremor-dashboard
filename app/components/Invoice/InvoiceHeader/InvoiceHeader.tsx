import { Flex } from "@tremor/react";

//Icons
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export const InvoiceHeader = () => {
  return (
    <Flex className="flex-col md:flex-row">
      <Flex
        flexDirection="col"
        alignItems="start"
        className="md:max-w-[33.333333%]">
        <div className="w-16 h-16 m-2 text-center">
          <div className="inline-block border-[3px] border-black dark:border-white rounded-[3px] w-[30px] h-[30px] -mr-[1.5px]">
            <FaAngleUp className="inline-block text-xl dark:text-white" />
          </div>
          <div className="inline-block border-[3px] border-black dark:border-white rounded-[3px] w-[30px] h-[30px] -ml-[1.5px]">
            <FaAngleUp className="inline-block text-xl dark:text-white" />
          </div>
          <div className="inline-block border-[3px] border-black dark:border-white rounded-[3px] w-[30px] h-[30px] -mt-[3px]">
            <FaAngleDown className="inline-block text-xl dark:text-white" />
          </div>
        </div>
        <p className="text-primary dark:text-white font-bold leading-[26px] tracking-[0.12px] mt-3">
          St. Independence Embankment, 050105 Bucharest, Romania
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-[25.6px] tracking-[0.17136px] mt-2 mb-4">
          tel: +4 (074) 1090873
        </p>
      </Flex>
      <Flex
        flexDirection="col"
        className="items-start md:items-end mt-10 md:mt-0">
        <p className="text-primary dark:text-white font-bold leading-[26px] tracking-[0.12px]">
          Billed to: John Doe
        </p>
        <p className="text-secondary dark:text-dark-romance font-primary font-light leading-[25.6px] tracking-[0.17136px] md:text-right">
          4006 Locust View Drive
          <br /> San Francisco CA
          <br /> California
        </p>
      </Flex>
    </Flex>
  );
};

export default InvoiceHeader;
