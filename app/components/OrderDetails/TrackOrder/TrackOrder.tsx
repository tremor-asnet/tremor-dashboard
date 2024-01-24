// Components
import { Bold, Flex } from "@tremor/react";

// Icon React
import { FaBell } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdInventory } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { RiRefund2Line } from "react-icons/ri";

// Types
import { TrackOrderProps } from "@/types/orderDetails";

// Helpers
import { formatDateTime } from "@/helpers";

const TrackOrder = ({
  id,
  transmitedToCourierAt,
  generateOrderId,
  deliveredAt,
  generateOrderAt,
  status = 0,
}: TrackOrderProps) => {
  const trackingOrder = (status: number, date: string) => {
    switch (status) {
      case 0:
        return (
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-few text-sm font-medium text-dark-primary">
              <IoMdCheckmark />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order delivered
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {formatDateTime(date)}
              </span>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-red-500 text-sm font-medium text-dark-primary">
              <RxCross2 />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order canceled
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {formatDateTime(date)}
              </span>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-light text-lg font-medium text-dark-primary">
              <RiRefund2Line />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order refunded
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {formatDateTime(date)}
              </span>
            </div>
          </div>
        );

      default:
        return (
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-few text-sm font-medium text-dark-primary">
              <IoMdCheckmark />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order delivered
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {formatDateTime(deliveredAt)}
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Track order
      </Bold>
      <ul className="relative m-0 w-full p-0 pb-6 tracking-[0.4px]">
        <li className="relative h-fit after:absolute after:left-[1.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:line-content">
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <FaBell />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order received
              </span>
              <span className="text-tremor-label text-primary uppercase font-light dark:text-dark-romance">
                {formatDateTime(generateOrderAt)}
              </span>
            </div>
          </div>
        </li>

        <li className="relative h-fit after:absolute after:left-[1.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:line-content">
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <MdInventory />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Generate order id {id}
              </span>
              <span className="text-tremor-label text-primary uppercase font-light dark:text-dark-romance">
                {formatDateTime(generateOrderId)}
              </span>
            </div>
          </div>
        </li>

        <li className="1234 relative h-fit after:absolute after:left-[1.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:content-empty">
          <div className="flex cursor-pointer items-start pl-2 pr-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 min-w-[32px] mt-1 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <IoCart />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order transmited to courier
              </span>
              <span className="text-tremor-label text-primary uppercase font-light dark:text-dark-romance">
                {formatDateTime(transmitedToCourierAt)}
              </span>
            </div>
          </div>
        </li>

        <li className="relative h-fit">{trackingOrder(status, deliveredAt)}</li>
      </ul>
    </>
  );
};

export default TrackOrder;
