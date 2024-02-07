// Constants
import { AGGREGATION_TYPE } from "@/constants";

export const mockSalaryData = [
  {
    type: AGGREGATION_TYPE.PAYPAL,
    value: 45500,
  },
  {
    type: AGGREGATION_TYPE.SALARY,
    value: 2000,
  },
];

export const mockBillingCard = {
  id: 1,
  type: "Mastercard",
  expire: "11/24",
  cardNumber: "4562 1122 4594 7866",
  holderFullName: "Jack Peterson",
  cardLast4Digit: "7866",
};
