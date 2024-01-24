// Components
import { Button, Flex, Title, Text } from "@tremor/react";
import { CustomImage } from "@/components";
import Link from "next/link";
import { orderStatus } from "@/helpers";

const OrderContact = ({
  name,
  url,
  date,
  status = 0,
}: {
  name: string;
  url: string;
  date: string;
  status?: number;
}) => {
  const firstDay = new Date().getTime();
  const lastDay = new Date(date).getTime();
  const period = Math.round((firstDay - lastDay) / (1000 * 3600 * 24));

  return (
    <Flex>
      <Flex justifyContent="start">
        <div className="mr-4">
          <CustomImage
            alt={name}
            className="rounded-full"
            height={110}
            priority
            src={url}
            width={110}
          />
        </div>
        <Flex flexDirection="col" alignItems="start" className="py-4">
          <Title className="text-tremor-content-title dark:text-dark-tremor-content-title text-primary font-semibold capitalize leading-[26px] tracking-[0.12px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            {name}
          </Title>
          {orderStatus(status, period)}
        </Flex>
      </Flex>
      <Flex>
        <Flex className="flex-col items-end">
          <Button className="antialiased min-w-[64px] py-[12px] text-center uppercase sm:px-4 bg-gradient-primary dark:bg-gradient-pickled rounded-lg border-0 hover:shadow-btn-primary-hover px-2 py-1.5 leading-[17px] tracking-[0.35px]">
            <Text className="uppercase py-[2px] text-xs font-bold text-white uppercase">
              contact us
            </Text>
          </Button>
          <Text className="mt-3 text-sm dark:text-dark-romance font-light opacity-100 text-secondary leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            Do you like the item? Leave us a review{" "}
            <Link href="#" className="font-semibold">
              here
            </Link>
            .
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OrderContact;
