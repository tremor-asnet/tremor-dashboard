// Components
import { BillingInfo } from "@/components";

// Services
import { getBillings } from "@/services";

// Types
import { BillingInfoData } from "@/types";

const BillingInfoDetail = async () => {
  const billingData = await getBillings();
  return (
    <>
      {billingData.billingInfos.map((item: BillingInfoData) => (
        <BillingInfo key={`${item.id}`} billingData={item} />
      ))}
    </>
  );
};

export default BillingInfoDetail;
