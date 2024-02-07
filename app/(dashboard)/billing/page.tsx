import { Bold, Flex } from "@tremor/react";

// Components
import Invoices from "@/components/Invoices/Invoices";
import BillingInfo from "@/components/OrderDetails/BillingInfo/BillingInfo";
import BillingCard from "@/components/Billing/BillingCard/BillingCard";
import SalaryCard from "@/components/Billing/SalaryCard/SalaryCard";
import Transactions from "@/components/Transaction/Transactions";
// Mocks
import { MOCK_INVOICES } from "@/mocks/invoices";
import { mockBilling } from "@/mocks/orderDetails";
import { mockSalaryData } from "@/mocks";
import { MOCK_TRANSACTIONS } from "@/mocks/transaction";

export const metadata = {
  title: "Billing - Tremor Dashboard",
};

const Billing = () => {
  return (
    <div>
      <Flex className="pb-6 flex-col lg:flex-row items-start">
        <Flex className="flex-col basis-2/3 xl:flex-row items-start">
          <div className="w-full mr-0 xl:mr-6">
            <BillingCard
              cardNumber="4562 1122 4594 7852"
              holderFullName="Jack Peterson"
              expires="11/22"
            />
          </div>
          <Flex className="w-full gap-6  mt-6 xl:mt-0">
            {mockSalaryData.map(item => (
              <>
                <SalaryCard
                  key={`${item.type}`}
                  type={item.type}
                  value={item.value}
                />
              </>
            ))}
          </Flex>
        </Flex>
        <Flex className="basis-1/3 pt-6 lg:pt-0 lg:pl-6">
          <Invoices invoices={MOCK_INVOICES} />
        </Flex>
      </Flex>
      <Flex className="md:flex-row flex-col">
        <div className="w-full md:min-h-[705px] max-w-[2042px] bg-white dark:bg-dark-tremor-primary px-4 pt-6 pb-4 rounded-xl shadow-box-icon-default dark:shadow-main-content mr-0 md:mr-6">
          <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
            Billing Information
          </Bold>
          {mockBilling.map(item => (
            <BillingInfo key={`${item.id}`} billingData={item} />
          ))}
        </div>
        <div className="w-full md:min-h-[705px] 2xl:max-w-[1450px] mt-6 md:mt-0">
          <Transactions
            newest={MOCK_TRANSACTIONS.slice(0, 2)}
            yesterday={MOCK_TRANSACTIONS.slice(2)}
            date="23 - 30 March 2020"
          />
        </div>
      </Flex>
    </div>
  );
};

export default Billing;
