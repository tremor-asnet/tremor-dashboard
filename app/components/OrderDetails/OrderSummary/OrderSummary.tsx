import { Bold, Flex, Text } from "@tremor/react";

// Types
import { OrderSummaryProps } from "@/types/orderDetails";

// Constants
import { CURRENCY } from "@/constants";

// Helpers
import { formattedNumber } from "@/helpers";

export const OrderSummary = (monies: OrderSummaryProps) => {
  const { productPrice, delivery, taxes } = monies;
  const totalPayment = productPrice + delivery + taxes;
  const listTitle = ["Product Price", "Delivery", "Taxes"];

  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Order Summary
      </Bold>
      <Flex flexDirection="col" className="mt-2 tracking-[0.4px]">
        <Flex>
          <Flex className="flex-col items-start text-secondary dark:text-dark-romance">
            {listTitle.map(title => (
              <Text className="dark:text-lighter leading-6 mb-2" key={title}>
                {title}&#58;
              </Text>
            ))}
          </Flex>
          <Flex className="flex-col items-end text-primary dark:text-white">
            {Object.keys(monies).map(item => {
              const money = monies[item as keyof OrderSummaryProps];
              return (
                <p
                  className="font-semibold mb-2"
                  key={`${item}`}
                  data-testid={`${item}`}>
                  {formattedNumber({
                    value: money,
                    currency: CURRENCY.DOLLAR,
                    isDecimalNumber: true,
                  })}
                </p>
              );
            })}
          </Flex>
        </Flex>
        <Flex className="mt-4">
          <Flex className="text-xl font-light text-secondary dark:text-dark-romance">
            Total:
          </Flex>
          <Flex
            className="flex-col items-end text-xl font-semibold text-primary dark:text-white"
            data-testid="total-price">
            {formattedNumber({
              value: totalPayment,
              currency: CURRENCY.DOLLAR,
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default OrderSummary;
