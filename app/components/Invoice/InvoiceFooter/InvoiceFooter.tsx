//Components
import { Button, Text, Flex } from "@tremor/react";

//Styles
import "@/styles/order.css";

export const InvoiceFooter = () => {
  return (
    <Flex className="items-start md:items-end flex-col md:flex-row mt-14 invoice">
      <Flex flexDirection="col" alignItems="start" className="md:max-w-[40%]">
        <p className="text-primary dark:text-white text-lg font-semibold leading-7">
          Thank you!
        </p>
        <p className="text-sm dark:text-dark-romance font-light text-secondary leading-5 my-2">
          If you encounter any issues related to the invoice you can contact us
          at:
        </p>
        <p className="dark:text-dark-romance text-secondary leading-5 my-4">
          email:{" "}
          <a
            className="text-primary dark:text-white"
            href="mailto:support@creative-tim.com">
            support@creative-tim.com
          </a>
        </p>
      </Flex>
      <Button className="py-3 px-6 my-2 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
        <Text className="uppercase font-bold text-xs text-white dark:text-white">
          print
        </Text>
      </Button>
    </Flex>
  );
};

export default InvoiceFooter;
