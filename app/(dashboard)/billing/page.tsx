import { Suspense } from "react";

// Components
import { Bold, Flex } from "@tremor/react";
import { LoadingIndicator } from "@/ui/components";
import {
  BillingDetail,
  BillingInfoDetail,
  InvoiceDetail,
  TransactionDetail,
} from "@/ui/features/billing";

// Services
import { getBillings, getTransactions, getInvoices } from "@/services";

export const metadata = {
  title: "Billing - Tremor Dashboard",
};

const Billing = async () => {
  const transactionsData = await getTransactions();
  const invoicesData = await getInvoices();
  const billingData = await getBillings();
  const { billingInfos, cardInfo, aggregation } = billingData;
  return (
    <div>
      <Flex flexDirection="col" alignItems="start" className="pb-6 lg:flex-row">
        <Flex
          flexDirection="col"
          alignItems="start"
          className="basis-2/3 xl:flex-row">
          <Suspense
            fallback={
              <LoadingIndicator
                additionalClass="flex justify-center items-center"
                width={8}
                height={8}
                isFullWidth={false}
                fillColor="river-bed-500"
              />
            }>
            <BillingDetail cardInfo={cardInfo} aggregation={aggregation} />
          </Suspense>
        </Flex>
        <Flex className="basis-1/3 pt-6 lg:pt-0 lg:pl-6">
          <Suspense
            fallback={
              <LoadingIndicator
                additionalClass="flex justify-center items-center"
                width={8}
                height={8}
                isFullWidth={false}
                fillColor="river-bed-500"
              />
            }>
            <InvoiceDetail invoices={invoicesData} />
          </Suspense>
        </Flex>
      </Flex>
      <Flex flexDirection="col" alignItems="start" className="md:flex-row">
        <div className="w-full md:min-h-[640px] max-w-[2042px] bg-white dark:bg-dark-tremor-primary px-4 pt-6 pb-4 rounded-xl shadow-box-icon-default dark:shadow-main-content mr-0 md:mr-6">
          <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
            Billing Information
          </Bold>
          <Suspense
            fallback={
              <LoadingIndicator
                additionalClass="flex justify-center items-center"
                width={8}
                height={8}
                isFullWidth={false}
                fillColor="river-bed-500"
              />
            }>
            <BillingInfoDetail billingInfos={billingInfos} />
          </Suspense>
        </div>
        <div className="w-full md:min-h-[640px] 2xl:max-w-[1450px] mt-6 md:mt-0">
          <Suspense
            fallback={
              <LoadingIndicator
                additionalClass="flex justify-center items-center"
                width={8}
                height={8}
                isFullWidth={false}
                fillColor="river-bed-500"
              />
            }>
            <TransactionDetail transactionsData={transactionsData} />
          </Suspense>
        </div>
      </Flex>
    </div>
  );
};

export default Billing;
