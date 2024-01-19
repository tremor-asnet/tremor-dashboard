import { Bold, Card, Flex } from "@tremor/react";

// Types
import { BillingInfoProps } from "@/types";

const BillingInfo = ({
  owner_name,
  company_name,
  email,
  vat,
}: BillingInfoProps) => (
  <Card className="h-full bg-tremor-primary dark:bg-dark-tremor-primary p-0 border-none ring-0 p-6">
    <Bold className="dark:text-white">Billing Information</Bold>
    <div className="opacity-100 bg-greyish mt-6 rounded-lg p-6 dark:bg-dark-tremor-primary">
      <span className="text-primary text-tremor-default font-semibold dark:text-white">
        {owner_name}
      </span>
      <div className="mt-4">
        <Flex className="flex-row mb-2">
          <span className="text-tremor-label text-tremor-content dark:text-dark-romance">
            Company Name:
            <span className="text-primary font-semibold pl-2.5  dark:text-white">
              {company_name}
            </span>
          </span>
        </Flex>
        <Flex className="flex-row mb-2">
          <span className="text-tremor-label text-tremor-content dark:text-dark-romance">
            Email Address:
            <span className="text-primary font-semibold pl-2.5  dark:text-white">
              {email}
            </span>
          </span>
        </Flex>
        <Flex className="flex-row mb-2">
          <span className="text-tremor-label text-tremor-content dark:text-dark-romance">
            VAT Number:
            <span className="text-primary font-semibold pl-2.5  dark:text-white">
              {vat}
            </span>
          </span>
        </Flex>
      </div>
    </div>
  </Card>
);

export default BillingInfo;
