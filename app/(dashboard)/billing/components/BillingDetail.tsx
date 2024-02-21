import { Flex } from "@tremor/react";

// Components
import BillingCard from "./BillingCard/BillingCard";
import SalaryCard from "./SalaryCard/SalaryCard";

// Services
import { getBillings } from "@/services";

// Types
import { SalaryCardData } from "@/types";

const BillingDetail = async () => {
  const billingData = await getBillings();
  const { cardNumber, holderFullName, expire } = billingData.cardInfo;
  const billingCardNumber = cardNumber.match(/.{1,4}/g).join(" ");

  return (
    <>
      <div className="w-full mr-0 xl:mr-6">
        <BillingCard
          cardNumber={billingCardNumber}
          holderFullName={holderFullName}
          expire={expire}
        />
      </div>
      <Flex className="w-full gap-6 mt-6 xl:mt-0 flex-col md:flex-row">
        {billingData.aggregation.map((item: SalaryCardData) => (
          <SalaryCard
            key={`${item.type}`}
            type={item.type}
            value={item.value}
          />
        ))}
      </Flex>
    </>
  );
};

export default BillingDetail;
