import { Bold, Flex } from "@tremor/react";

// Types
import { BillingInfoProps } from "@/types/orderDetails";

const BillingInfo = (billingData: BillingInfoProps) => {
  const listTitle = ["Company Name", "Email Address", "VAT Number"];
  const { ownerName, ...billingInfo } = billingData;

  return (
    <div>
      <Bold className="dark:text-white">Billing Information</Bold>
      <Flex
        flexDirection="col"
        alignItems="start"
        className="bg-greyish mt-4 rounded-lg p-6 dark:bg-dark-tremor-primary">
        <span className="text-primary text-tremor-default font-semibold dark:text-white">
          {billingData.ownerName}
        </span>
        <Flex
          className="mt-4 gap-3"
          alignItems="baseline"
          justifyContent="start">
          <div>
            {listTitle.map(title => (
              <p className="mb-2 text-xs dark:text-dark-lighter" key={title}>
                {`${title}:`}
              </p>
            ))}
          </div>
          <div>
            {Object.keys(billingInfo).map(item => {
              const data =
                billingInfo[item as keyof Omit<BillingInfoProps, "ownerName">];
              return (
                <p
                  key={`${item}`}
                  className="mb-2 font-bold text-xs dark:text-white">
                  {data}
                </p>
              );
            })}
          </div>
        </Flex>
      </Flex>
    </div>
  );
};

export default BillingInfo;
