"use client";

import Link from "next/link";
import dayjs from "dayjs";

// Components
import { Flex } from "@tremor/react";

interface InfoInvoiceProps {
  id: number;
  createdAt: string;
  dueAt: string;
}

const InfoInvoice = ({ id, createdAt, dueAt }: InfoInvoiceProps) => {
  const formattedCreateAt = dayjs(createdAt).format("DD/MM/YYYY");
  const formattedDueAt = dayjs(dueAt).format("DD/MM/YYYY");

  return (
    <Flex className="mb-7 flex-col md:flex-row items-start md:items-center">
      <div className="w-full mb-5 md:mb-0">
        <p className="text-base font-normal dark:text-lighter text-secondary dark:print:text-secondary">
          Invoice no
        </p>
        <Link
          href="#"
          className="text-tremor-primary text-primary dark:text-white leading-relaxed font-bold tracking-wide no-underline dark:print:text-primary">
          #{id}
        </Link>
      </div>
      <div className="w-full">
        <Flex className="flex-col md:flex-row mb-1 md:mb-0">
          <p className="w-full mb-1 md:mb-0 text-left md:text-end text-base font-normal dark:text-lighter text-secondary dark:print:text-secondary">
            Invoice date:
          </p>
          <p className="w-full text-left md:text-end text-base text-primary font-semibold dark:text-white dark:print:text-primary">
            {formattedCreateAt}
          </p>
        </Flex>
        <Flex className="flex-col md:flex-row">
          <p className="w-full mb-1 md:mb-0 text-left md:text-end text-base font-normal dark:text-lighter text-secondary dark:print:text-secondary">
            Due date:
          </p>
          <p className="w-full text-left md:text-end text-base text-primary font-semibold dark:text-white dark:print:text-primary">
            {formattedDueAt}
          </p>
        </Flex>
      </div>
    </Flex>
  );
};

export default InfoInvoice;
