// Components
import { BillingInfo } from "@/components";

// Types
import { BillingInfoData } from "@/types";

interface BillingInfoDataProps {
  billingInfos: BillingInfoData[];
}

const BillingInfoDetail = ({ billingInfos }: BillingInfoDataProps) => {
  return (
    <>
      {billingInfos.map((item: BillingInfoData) => (
        <BillingInfo key={`${item.id}`} billingData={item} />
      ))}
    </>
  );
};

export default BillingInfoDetail;
