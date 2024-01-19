import { Bold, Card, Flex, Text } from "@tremor/react";

// Types
import { BillingInfoProps } from "@/types/orderDetails";

const BillingInfo = (billingData: BillingInfoProps) => {
  const listTitle = ["Product Price", "Delivery", "Taxes"];
  return (
    <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0 p-6">
      <Bold className="dark:text-white">Billing Information</Bold>
      <div className="opacity-100 bg-greyish mt-6 rounded-lg p-6 dark:bg-dark-tremor-primary">
        <span className="text-primary text-tremor-default font-semibold dark:text-white">
          {billingData.ownerName}
        </span>
        <div className="mt-4">
          <div>
            {listTitle.map(title => (
              <Text
                className="text-tremor-label text-tremor-content dark:text-dark-romance"
                key={title}>
                {title}
              </Text>
            ))}
          </div>
          <div>
            {Object.keys(billingData).map(item => {
              const data = billingData[item as keyof BillingInfoProps];
              return (
                <span
                  key={`${item}`}
                  className="text-primary font-semibold pl-2.5  dark:text-white">
                  {data}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BillingInfo;
