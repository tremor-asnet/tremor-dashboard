// Components
import { Flex, Text, Title, Button } from "@tremor/react";
import { CustomImage } from "@/components";

//Types
import { TOrder } from "@/types";

// Helpers
import { OrderStatus } from "@/helpers";

export type OrderContactItemProps = {
  orderContact: TOrder;
};

const OrderContactItem = ({ orderContact }: OrderContactItemProps) => (
  <Flex className="flex-col md:flex-row pb-4 mb-4 border-0 border-b border-gray-100 last:border-transparent">
    <Flex>
      <Flex className="w-auto justify-start">
        <Flex className="w-auto justify-start mr-4">
          <CustomImage
            alt={orderContact.products[0].name}
            className="rounded-full"
            height={110}
            priority
            src={orderContact.products[0].url}
            width={110}
          />
        </Flex>
        <Flex className="w-auto flex-col justify-start items-start">
          <Title className="text-tremor-content-title dark:text-dark-tremor-content-title text-primary font-semibold capitalize leading-[26px] tracking-[0.12px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
            {orderContact.products[0].name}
          </Title>
          {OrderStatus(orderContact.status)}
        </Flex>
      </Flex>
    </Flex>
    <Flex>
      <Flex className="flex-col items-end">
        <Button className="antialiased min-w-[64px] py-[12px] text-center uppercase sm:px-4 bg-gradient-primary dark:bg-gradient-pickled rounded-lg border-0 hover:shadow-btn-primary-hover px-2 py-1.5 leading-[17px] tracking-[0.35px]">
          <Text className="uppercase py-[2px] text-xs font-bold text-white uppercase">
            contact us
          </Text>
        </Button>
        <Text className="mt-3 text-sm dark:text-dark-romance font-light opacity-100 text-secondar leading-[21px] tracking-[0.4px] truncate max-w-[100px] lg:max-w-[200px] xl:max-w-[300px] 2xl:max-w-[400px] min-w-[100px]">
          Do you like the item? Leave us a review here.
        </Text>
      </Flex>
    </Flex>
  </Flex>
);

export default OrderContactItem;
