"use client";

import Link from "next/link";
import dayjs from "dayjs";

// Components
import { Text, Flex } from "@tremor/react";

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
      <div className="mb-6 md:mb-0">
        <Text className="!text-base font-light font-normal dark:text-lighter text-secondary">
          Invoice no
        </Text>
        <Link
          href="#"
          className="text-tremor-primary text-primary dark:text-white leading-relaxed font-bold tracking-[0.0075em] no-underline">
          #{id}
        </Link>
      </div>
      <div className="min-w-[290px]">
        <Flex className="flex-col md:flex-row mb-1 md:mb-0 items-start md:items-center">
          <Text className="!text-base font-light font-normal dark:!text-lighter text-secondary">
            Invoice date:
          </Text>
          <Text className="!text-base font-semibold dark:!text-white text-primary">
            {formattedCreateAt}
          </Text>
        </Flex>
        <Flex className="flex-col md:flex-row items-start md:items-center">
          <Text className="!text-base font-light font-normal dark:!text-lighter text-secondary">
            Due date:
          </Text>
          <Text className="!text-base font-semibold dark:!text-white text-primary">
            {formattedDueAt}
          </Text>
        </Flex>
      </div>
    </Flex>
  );
};

export default InfoInvoice;
