import Link from "next/link";

// Components
import { Flex, Title, Text } from "@tremor/react";
import { OrderStatus } from "./OrderStatus";
import { Button, CustomImage } from "@/ui/components";

// Constants
import { VARIANT_BUTTON } from "@/constants";

const OrderContact = ({
  name,
  url,
  date,
  status = 0,
}: {
  name: string;
  url: string;
  date: number;
  status?: number;
}) => {
  return (
    <Flex className="flex-wrap sm:flex-nowrap order-contact">
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
          <Title className="text-tremor-content-title dark:text-dark-tremor-content-title text-primary font-semibold capitalize leading-6 tracking-wide truncate max-w-[200px] md:max-w-[240px] xl:max-w-xs 2xl:max-w-sm">
            {name}
          </Title>
          <OrderStatus status={status} period={date} />
        </Flex>
      </Flex>
      <Flex>
        <Flex flexDirection="col" alignItems="end">
          <Button
            variant={VARIANT_BUTTON.PRIMARY}
            additionalClass="antialiased min-w-[64px] py-[12px] text-center uppercase sm:px-4 rounded-lg border-0 px-2 py-1.5 leading-[17px] tracking-[0.35px]">
            <Text className="uppercase py-[2px] text-xs font-bold text-white dark:text-dark-primary uppercase">
              contact us
            </Text>
          </Button>
          <Text className="mt-3 text-sm dark:text-dark-romance font-light opacity-100 text-secondary text-right leading-[21px] w-full">
            Do you like the product? Leave us a review{" "}
            <Link href="#" className="font-normal">
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
