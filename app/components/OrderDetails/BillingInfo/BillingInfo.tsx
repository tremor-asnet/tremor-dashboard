import { Bold, Flex } from "@tremor/react";

// Types
import { BillingInfoData } from "@/types";

const BillingInfo = ({
  billingData,
}: {
  billingData: Partial<BillingInfoData>;
}) => {
  const listTitle = ["Company Name", "Email Address", "VAT Number"];
  const { ownerName, cardLast4Digit, ...billingInfo } = billingData;

  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Billing Information
      </Bold>
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
          <Flex
            flexDirection="col"
            alignItems="start"
            className="max-w-[90px] text-secondary dark:text-dark-romance">
            {listTitle.map(title => (
              <p className="mb-2 text-xs dark:text-dark-lighter" key={title}>
                {`${title}:`}
              </p>
            ))}
          </Flex>
          <Flex
            flexDirection="col"
            alignItems="start"
            className="text-primary dark:text-white">
            {Object.keys(billingInfo).map(item => {
              const data =
                billingInfo[
                  item as keyof Omit<
                    BillingInfoData,
                    "ownerName" | "cardLast4Digit"
                  >
                ];
              return (
                <p
                  key={`${item}`}
                  className="mb-2 font-bold text-xs dark:text-white">
                  {data}
                </p>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default BillingInfo;
