// Components
import { Flex } from "@tremor/react";
import BillingCard from "../BillingCard/BillingCard";
import SalaryCard from "../SalaryCard/SalaryCard";

// Types
import { SalaryCardData } from "@/types";

interface BillingDataProps {
  cardInfo: {
    expire: string;
    cardNumber: string;
    holderFullName: string;
  };
  aggregation: SalaryCardData[];
}

const BillingDetail = ({ cardInfo, aggregation }: BillingDataProps) => {
  const { cardNumber, holderFullName, expire } = cardInfo;
  // @ts-ignore: Object is possibly 'null'.
  const billingCardNumber = cardNumber.match(/.{1,4}/g).join(" ");

  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full mr-0 md:mr-6">
        <BillingCard
          cardNumber={billingCardNumber}
          holderFullName={holderFullName}
          expire={expire}
        />
      </div>
      <Flex className="w-full gap-6 mt-6 md:mt-0 flex-col md:flex-row">
        {aggregation.map((item: SalaryCardData) => (
          <SalaryCard
            key={`${item.type}`}
            type={item.type}
            value={item.value}
          />
        ))}
      </Flex>
    </div>
  );
};

export default BillingDetail;
