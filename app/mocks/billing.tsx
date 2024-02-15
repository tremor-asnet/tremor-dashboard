// Constants
import { AGGREGATION_TYPE } from "@/constants";

export const mockSalaryData = [
  {
    type: AGGREGATION_TYPE.SALARY,
    value: 2000,
  },
  {
    type: AGGREGATION_TYPE.PAYPAL,
    value: 45500,
  },
];

export const mockBillingCard = {
  expire: "11/24",
  cardNumber: "4562 1122 4594 7866",
  holderFullName: "Jack Peterson",
};
