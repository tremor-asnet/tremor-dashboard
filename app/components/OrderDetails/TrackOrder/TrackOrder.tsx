import { Bold, Flex } from "@tremor/react";
import dayjs from "dayjs";

// Icon React
import { FaBell } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { MdInventory } from "react-icons/md";

// Types
import { TrackOrderProps } from "@/types/orderDetails";

const TrackOrder = ({
  id,
  transmitedToCourierAt,
  generateOrderId,
  deliveredAt,
  generateOrderAt,
}: TrackOrderProps) => {
  return (
    <>
      <Bold className="text-primary font-semibold capitalize dark:text-white tracking-[0.12px]">
        Track order
      </Bold>
      <ul className="relative m-0 w-full p-0 pb-6 tracking-[0.4px]">
        <li className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:line-content">
          <Flex className="justify-start px-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <FaBell />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order received
              </span>
              <span className="text-tremor-label text-secondary font-light dark:text-dark-romance uppercase">
                {dayjs(generateOrderAt).format("DD MMM h:m A")}
              </span>
            </div>
          </Flex>
        </li>

        <li className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:line-content">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <MdInventory />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Generate order id {id}
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {dayjs(generateOrderId).format("DD MMM h:m A")}
              </span>
            </div>
          </div>
        </li>

        <li className="1234 relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-[5px] after:line-track after:w-[0.125rem] after:bg-border after:content-empty">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-light text-sm font-medium text-dark-primary">
              <IoCart />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order transmited to courier
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {dayjs(transmitedToCourierAt).format("DD MMM h:m A")}
              </span>
            </div>
          </div>
        </li>

        <li className="relative h-fit">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] after:line-content">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-few text-sm font-medium text-dark-primary">
              <IoMdCheckmark />
            </span>
            <div className="flex flex-col">
              <span className="text-tremor-default text-primary font-semibold after:absolute after:flex after:text-[0.8rem] dark:text-dark-primary">
                Order delivered
              </span>
              <span className="text-tremor-label text-secondary uppercase font-light dark:text-dark-romance">
                {dayjs(deliveredAt).format("DD MMM h:m A")}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TrackOrder;
