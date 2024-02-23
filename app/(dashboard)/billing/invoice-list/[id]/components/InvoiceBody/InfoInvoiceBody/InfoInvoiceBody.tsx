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
    <Flex className="mb-7 md:flex-row items-start md:items-center">
      <div className="w-full md:mb-0">
        <Text className="!text-base font-light font-normal dark:text-lighter text-secondary dark:print:!text-secondary">
          Invoice no
        </Text>
        <Link
          href="#"
          className="text-tremor-primary text-primary dark:text-white leading-relaxed font-bold tracking-[0.0075em] no-underline dark:print:text-primary">
          #{id}
        </Link>
      </div>
      <div className="w-full">
        <Flex>
          <Text className="w-full text-end !text-base font-light font-normal dark:!text-lighter text-secondary dark:print:!text-secondary">
            Invoice date:
          </Text>
          <Text className="w-full text-end !text-base text-primary font-semibold dark:!text-white dark:print:!text-primary">
            {formattedCreateAt}
          </Text>
        </Flex>
        <Flex>
          <Text className="w-full text-end !text-base font-light font-normal dark:!text-lighter text-secondary dark:print:!text-secondary">
            Due date:
          </Text>
          <Text className="w-full text-end !text-base text-primary font-semibold dark:!text-white dark:print:!text-primary">
            {formattedDueAt}
          </Text>
        </Flex>
      </div>
    </Flex>
  );
};

export default InfoInvoice;
