import { Flex, Bold, Text, Button } from "@tremor/react";

// Types
import { InvoiceHeaderData } from "@/types";

//Styles
import "@/styles/order.css";

export const InvoiceHeader = ({
  id,
  createdAt,
  orderCode,
}: InvoiceHeaderData) => {
  return (
    <Flex className="invoice">
      <div>
        <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
          Order Details
        </Bold>
        <div className="mt-2 tracking-[0.4px]">
          <Text className="dark:text-dark-romance">
            Order no. <Bold>{id}</Bold> from{" "}
            <Bold>
              {createdAt.replace(/T.*/, "").split("-").reverse().join(".")}
            </Bold>
          </Text>
          <Text className="dark:text-dark-romance">
            Code: <Bold>{orderCode}</Bold>
          </Text>
        </div>
      </div>
      <Button className="py-3 px-6 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
        <Text className="uppercase font-bold text-xs text-white dark:text-white">
          invoice
        </Text>
      </Button>
    </Flex>
  );
};

export default InvoiceHeader;
