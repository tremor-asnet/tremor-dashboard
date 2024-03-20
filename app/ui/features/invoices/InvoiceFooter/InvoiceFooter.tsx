"use client";

//Components
import { Text, Flex } from "@tremor/react";

//Styles
import "@/styles/billing.css";
import { Button } from "@/ui/components";

// Constants
import { VARIANT_BUTTON } from "@/constants";

const InvoiceFooter = () => {
  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <Flex
      alignItems="start"
      flexDirection="col"
      className="md:items-end md:flex-row mt-10 md:mt-20 invoice">
      <Flex
        flexDirection="col"
        alignItems="start"
        className="print-footer md:max-w-[40%]">
        <Text className="text-primary dark:text-white text-xl font-semibold leading-7 dark:print:text-primary">
          Thank you!
        </Text>
        <Text className="dark:text-dark-romance font-light text-secondary leading-5 my-2 print:text-black dark:print:text-black">
          If you encounter any issues related to the invoice you can contact us
          at:
        </Text>
        <Text className="text-tremor-title dark:text-dark-romance text-secondary leading-5 mt-4 print:text-black dark:print:text-black">
          email:{" "}
          <a
            className="text-primary dark:text-white dark:print:text-primary"
            href="mailto:support@creative-tim.com">
            support@creative-tim.com
          </a>
        </Text>
      </Flex>

      <Button
        variant={VARIANT_BUTTON.PRIMARY}
        additionalClass="py-3 px-6 mt-6 md:mt-0 border-none dark:text-white print:hidden"
        onClick={handlePrintInvoice}>
        <Text className="uppercase font-bold text-xs text-white dark:text-white tracking-wide">
          print
        </Text>
      </Button>
    </Flex>
  );
};

export default InvoiceFooter;
