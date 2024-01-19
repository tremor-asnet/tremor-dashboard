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
      <Bold className="dark:text-white">Order Summary</Bold>
      <Flex flexDirection="col" className="mt-2">
        <Flex>
          <div>
            {listTitle.map(title => (
              <Text className="dark:text-lighter" key={title}>
                {title}
              </Text>
            ))}
          </div>
          <div>
            {Object.keys(monies).map(item => {
              const money = monies[item as keyof OrderSummaryProps];
              return (
                <p
                  className="font-bold dark:text-white text-end"
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
          </div>
        </Flex>
        <Flex className="mt-4">
          <p className="text-tremor-content text-xl font-light dark:text-lighter">
            Total:
          </p>
          <p className="font-bold dark:text-white">
            {formattedNumber({
              value: totalPayment,
              currency: CURRENCY.DOLLAR,
            })}
          </p>
        </Flex>
      </Flex>
    </>
  );
};
