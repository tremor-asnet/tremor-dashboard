// Components
import { Text } from "@tremor/react";

interface OrderStatusProps {
  status: number;
  period: number;
}

export const OrderStatus = ({ status, period }: OrderStatusProps) => {
  switch (status) {
    // When data response status === 0, the order status is delivered
    case 0:
      return (
        <>
          <Text className="dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] w-full">
            Order was delivered {period} days ago.
          </Text>
          <Text className="p-2 mt-4 font-bold text-white dark:text-white bg-green-500 text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            delivered
          </Text>
        </>
      );
    // When data response status === 1, the order status is canceled
    case 1:
      return (
        <>
          <Text className="dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] w-full">
            Order was canceled {period} days ago.
          </Text>
          <Text className="p-2 mt-4 font-bold text-white dark:text-white bg-red-500 text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            canceled
          </Text>
        </>
      );
    // When data response status === 2, the order status is refunded
    case 2:
      return (
        <>
          <Text className="dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] w-full">
            Order was refunded {period} days ago.
          </Text>
          <Text className="p-2 mt-4 font-bold text-white dark:text-white bg-primary text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            refunded
          </Text>
        </>
      );
    // When data response status === !0 | !1 | !2, the order status is pending
    default:
      return (
        <>
          <Text className="dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] w-full">
            Order is peding for {period}.
          </Text>
          <Text className="p-2 mt-4 font-bold text-white dark:text-white bg-seldom text-xs rounded-tremor-small leading-[10.5px] tracking-[0.18px] uppercase">
            pending
          </Text>
        </>
      );
  }
};
