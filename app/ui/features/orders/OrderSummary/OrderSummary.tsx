import { Bold, Flex, Text } from "@tremor/react";

// Types
import { OrderSummaryData } from "@/types";

// Constants
import { CURRENCY } from "@/constants";

// Helpers
import { moneyFormat } from "@/helpers";

export const OrderSummary = (monies: OrderSummaryData) => {
  const { productPrice, delivery, taxes } = monies;
  const totalPayment =
    (productPrice ? productPrice : 0) +
    (delivery ? delivery : 0) +
    (taxes ? taxes : 0);
  const listTitle = ["Product Price", "Delivery", "Taxes"];

  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Order Summary
      </Bold>
      <Flex flexDirection="col" className="mt-2 tracking-[0.4px]">
        <Flex>
          <Flex
            alignItems="start"
            flexDirection="col"
            className="text-secondary dark:text-dark-romance">
            {listTitle.map(title => (
              <Text
                className="dark:text-dark-romance leading-6 mb-2"
                key={title}>
                {title}&#58;
              </Text>
            ))}
          </Flex>
          <Flex
            alignItems="end"
            flexDirection="col"
            className="text-primary dark:text-white">
            {Object.keys(monies).map(item => {
              const money = monies[item as keyof OrderSummaryData];
              return (
                <p
                  className="font-semibold mb-2"
                  key={`${item}`}
                  data-testid={`${item}`}>
                  {moneyFormat({
                    value: money,
                    currency: CURRENCY.DOLLAR,
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
            {moneyFormat({
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
