import { Bold, Flex } from "@tremor/react";

// Types
import { BillingInfoData } from "@/types";

const BillingInfo = ({
  billingData,
}: {
  billingData: Partial<BillingInfoData>;
}) => {
  const { ownerName, companyName, email, vat } = billingData;

  const billingInfoData = [
    {
      id: 1,
      type: "companyName",
      title: "Company Name",
      value: companyName,
    },
    {
      id: 2,
      type: "email",
      title: "Email Address",
      value: email,
    },
    {
      id: 3,
      type: "vat",
      title: "VAT Number",
      value: vat,
    },
  ];

  const checkRenderBillValue = (type: string, value?: string) => {
    return type === "email" ? (
      <a
        href={`mailto: ${value}`}
        className="text-xs text-primary font-bold dark:text-white ml-2.5">
        {value}
      </a>
    ) : (
      <p className="text-xs text-primary font-bold dark:text-white ml-2.5">
        {value}
      </p>
    );
  };

  const renderBillInfoData = billingInfoData.map(
    ({ id, type, title, value }) => {
      return (
        <Flex key={id} className="content-start justify-start">
          <p className="text-secondary dark:text-dark-romance text-xs dark:text-dark-lighter">
            {`${title}:`}
          </p>
          {checkRenderBillValue(type, value)}
        </Flex>
      );
    },
  );

  return (
    <>
      <Flex
        flexDirection="col"
        alignItems="start"
        className="bg-greyish mt-4 rounded-lg p-6 dark:bg-dark-tremor-primary">
        <span className="text-primary text-tremor-default font-semibold dark:text-white">
          {ownerName}
        </span>
        <Flex className="flex-col mt-4 gap-3">{renderBillInfoData}</Flex>
      </Flex>
    </>
  );
};

export default BillingInfo;
