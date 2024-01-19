import { Flex, Bold, Text, Button } from "@tremor/react";

// Types
import { InvoiceHeaderProps } from "@/types/orderDetails";

export const InvoiceHeader = ({
  id,
  createdAt,
  orderCode,
}: InvoiceHeaderProps) => {
  return (
    <Flex>
      <div>
        <Bold className="dark:text-white">Order Details</Bold>
        <div className="mt-2">
          <Text className="dark:text-lighter">
            Order no. <Bold>{id}</Bold> from{" "}
            <Bold>
              {createdAt.replace(/T.*/, "").split("-").reverse().join(".")}
            </Bold>
          </Text>
          <Text className="dark:text-lighter">
            Code: <Bold>{orderCode}</Bold>
          </Text>
        </div>
      </div>
      <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
        <Text className="uppercase text-xs text-white dark:text-white">
          invoice
        </Text>
      </Button>
    </Flex>
  );
};
