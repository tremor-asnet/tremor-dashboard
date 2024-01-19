import { Bold, Flex, Text } from "@tremor/react";

// Types
import { OrderSummaryProps } from "@/types/orderDetails";

export const OrderSummary = ({
  productPrice,
  delivery,
  taxes,
}: OrderSummaryProps) => {
  const totalPayment = productPrice + delivery + taxes;

  return (
    <>
      <Bold className="dark:text-white">Order Summary</Bold>
      <Flex flexDirection="col" className="mt-2">
        <Flex>
          <Text className="dark:text-lighter">Product Price:</Text>
          <p className="font-bold dark:text-white">${productPrice}</p>
        </Flex>
        <Flex>
          <Text className="dark:text-lighter">Delivery:</Text>
          <p className="font-bold dark:text-white">${delivery}</p>
        </Flex>
        <Flex>
          <Text className="dark:text-lighter">Taxes:</Text>
          <p className="font-bold dark:text-white">${taxes}</p>
        </Flex>
        <Flex className="mt-4">
          <p className="text-tremor-content text-xl font-light dark:text-lighter">
            Total:
          </p>
          <p className="font-bold dark:text-white">${totalPayment}</p>
        </Flex>
      </Flex>
    </>
  );
};
