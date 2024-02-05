import { Bold, Flex } from "@tremor/react";

// Components
import Invoices from "@/components/Invoices/Invoices";
import BillingInfo from "@/components/OrderDetails/BillingInfo/BillingInfo";

// Mocks
import { MOCK_INVOICES } from "@/mocks/invoices";
import { mockBilling } from "@/mocks/orderDetails";

export const metadata = {
  title: "Billing - Tremor Dashboard",
};

const Billing = () => {
  return (
    <div>
      <Flex className="pb-6 flex-col lg:flex-row items-start">
        <Flex className="flex-col basis-2/3 xl:flex-row">
          <div className="w-full bg-white mr-0 xl:mr-6">Card</div>
          <div className="w-full bg-white mt-6 xl:mt-0">Salary</div>
        </Flex>
        <Flex className="basis-1/3 pt-6 lg:pt-0 lg:pl-6">
          <Invoices invoices={MOCK_INVOICES} />
        </Flex>
      </Flex>
      <Flex className="md:flex-row flex-col justify-start items-start">
        <div className="w-full max-w-[2042px] bg-white dark:bg-dark-tremor-primary px-4 pt-6 pb-4 rounded-xl shadow-box-icon-default dark:shadow-main-content mr-0 md:mr-6">
          <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
            Billing Information
          </Bold>
          {mockBilling.map(item => (
            <BillingInfo key={`${item.id}`} billingData={item} />
          ))}
        </div>
        <div className="w-full 2xl:max-w-[1450px] bg-white mt-6 md:mt-0">
          Transaction
        </div>
      </Flex>
    </div>
  );
};

export default Billing;
