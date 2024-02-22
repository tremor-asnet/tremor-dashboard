"use client";

//Components
import { Button, Text, Flex } from "@tremor/react";

//Styles
import "@/styles/order.css";

export const InvoiceFooter = () => {
  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <Flex className="items-start md:items-end flex-col md:flex-row mt-10 md:mt-20 invoice">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[40%]">
        <p className="text-primary dark:text-white text-tremor-primary font-semibold leading-7">
          Thank you!
        </p>
        <p className="text-sm dark:text-dark-romance font-light text-secondary leading-5 my-2">
          If you encounter any issues related to the invoice you can contact us
          at:
        </p>
        <p className="dark:text-dark-romance text-secondary leading-5 mt-4">
          email:{" "}
          <a
            className="text-primary dark:text-white"
            href="mailto:support@creative-tim.com">
            support@creative-tim.com
          </a>
        </p>
      </Flex>
      <Button
        className="py-3 px-6 mt-6 md:mt-0 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white print:hidden"
        onClick={handlePrintInvoice}>
        <Text className="uppercase font-bold text-xs text-white dark:text-white">
          print
        </Text>
      </Button>
    </Flex>
  );
};

export default InvoiceFooter;
