"use client";

//Components
import { Button, Text, Flex } from "@tremor/react";

//Styles
import "@/styles/billing.css";

const InvoiceFooter = () => {
  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <Flex className="items-start md:items-end flex-col md:flex-row mt-10 md:mt-20 invoice">
      <Flex
        flexDirection="col"
        alignItems="start"
        className="print-footer md:max-w-[40%]">
        <p className="text-primary dark:text-white text-tremor-primary font-semibold leading-7 dark:print:text-primary">
          Thank you!
        </p>
        <p className="text-sm dark:text-dark-romance font-light text-secondary leading-5 my-2 dark:print:text-secondary">
          If you encounter any issues related to the invoice you can contact us
          at:
        </p>
        <p className="dark:text-dark-romance text-secondary leading-5 mt-4 dark:print:text-secondary">
          email:{" "}
          <a
            className="text-primary dark:text-white dark:print:text-secondary"
            href="mailto:support@creative-tim.com">
            support@creative-tim.com
          </a>
        </p>
      </Flex>
      <Button
        className="py-3 px-6 mt-6 md:mt-0 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white print:hidden"
        onClick={handlePrintInvoice}>
        <Text className="uppercase font-bold text-xs text-white dark:text-white tracking-wide">
          print
        </Text>
      </Button>
    </Flex>
  );
};

export default InvoiceFooter;
