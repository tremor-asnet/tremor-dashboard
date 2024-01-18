"use client";

import { Flex, Icon } from "@tremor/react";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";

const TrackOrder = () => {
  const steps = [
    "Order received",
    "Generate order id #1832412",
    "Order transited to courier",
    "Order delivered",
  ];

  return (
    <>
      <ul className="bg-white relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
        <li className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              <FaRegBell />
            </span>
            <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              step1
            </span>
          </div>
          <div className="pb-6 pl-[4.2rem]">22 DEC 7:20 PM</div>
        </li>

        <li className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              2
            </span>
            <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              step2
            </span>
          </div>
          <div className="pb-6 pl-[4.2rem]">22 DEC 7:20 PM</div>
        </li>

        <li className="relative h-fit">
          <div className="flex cursor-pointer items-center px-6 pt-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              3
            </span>
            <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              step3
            </span>
          </div>
          <div className="pb-6 pl-[4.2rem]">22 DEC 7:20 PM</div>
        </li>
      </ul>
    </>
  );
};

export default TrackOrder;
{
  /* <div classNameName="flex flex-col relative">
        <Flex className="flex-row items-start mb-6 after:content-[''] after:absolute after:h-full after:opacity-100 after:border-r-2 after:border-r-[#dee2e6] after:border-solid after:left-[15px] after:top-8">
          <Flex className="justify-center items-center w-8 h-8 z-[2] opacity-100 shadow-none text-sm rounded-[50%] bg-[rgb(123,128,154)]">
            <Icon size="xs" icon={FaRegBell} />
          </Flex>
          <Flex className="flex-col items-start ml-[15px]">
            <p className="text-tremor-default text-primary">Order received</p>
            <p>22 DEC 7:20 PM</p>
          </Flex>
        </Flex>
        <Flex className="flex-row items-start mb-6 after:content-[''] after:absolute after:h-full after:opacity-100 after:border-r-2 after:border-r-[#dee2e6] after:border-solid after:left-[15px] after:top-8">
          <Flex className="justify-center items-center w-8 h-8 z-[2] opacity-100 shadow-none text-sm rounded-[50%] bg-[rgb(123,128,154)]">
            <Icon size="xs" icon={FaRegBell} />
          </Flex>
          <Flex className="flex-col items-start ml-[15px]">
            <p className="text-tremor-default text-primary">
              Generate order id #1832412
            </p>
            <p>22 DEC 7:20 PM</p>
          </Flex>
        </Flex>
        <Flex className="flex-row items-start mb-6 after:content-[''] after:absolute after:h-full after:opacity-100 after:border-r-2 after:border-r-[#dee2e6] after:border-solid after:left-[15px] after:top-8">
          <Flex className="justify-center items-center w-8 h-8 z-[2] opacity-100 shadow-none text-sm rounded-[50%] bg-[rgb(123,128,154)]">
            <Icon size="xs" icon={FaRegBell} />
          </Flex>
          <Flex className="flex-col items-start ml-[15px]">
            <p className="text-tremor-default text-primary">
              Order transited to courier
            </p>
            <p>22 DEC 7:20 PM</p>
          </Flex>
        </Flex>
        <Flex className="flex-row items-start">
          <Flex className="justify-center items-center w-8 h-8 z-[2] opacity-100 shadow-none text-sm rounded-[50%] bg-[rgb(123,128,154)]">
            <Icon size="xs" icon={FaRegBell} />
          </Flex>
          <Flex className="flex-col items-start ml-[15px]">
            <p className="text-tremor-default text-primary">Order delivered</p>
            <p>22 DEC 7:20 PM</p>
          </Flex>
        </Flex>
      </div> */
}
