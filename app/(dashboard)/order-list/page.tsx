import dynamic from "next/dynamic";
import { Suspense } from "react";

// Components
import { Button, Flex, Text } from "@tremor/react";
import { InputSearch, LoadingIndicator } from "@/ui/components";
const OrderFilter = dynamic(() => import("@/ui/features/orders/OrderFilter"));
const TableOrder = dynamic(
  () => import("@/ui/features/orders/TableOrder/TableOrder"),
);

// Services
import { getOrders } from "@/services";

// Types
import { OrderResponse } from "@/types";

type SearchParams = {
  id?: number;
  status?: number;
  page?: number;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const { id = -1, status = -1, page = 1 } = searchParams as SearchParams;

  const response: OrderResponse = await getOrders(page, status, id);

  const { results, total, skip } = response;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs font-bold text-white dark:text-white tracking-wide">
            new order
          </Text>
        </Button>
        <OrderFilter title="Filters" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch field="id" />
        <div className="w-full relative min-h-[183px] rounded-lg">
          <Suspense
            key={`${id}-${status}-${page}`}
            fallback={
              <LoadingIndicator
                additionalClass="flex justify-center items-center bg-[rgba(0,0,0,0.3)] absolute overflow-hidden w-full h-full inset-0 z-10 cursor-not-allowed"
                width={8}
                height={8}
                isFullWidth={false}
                fillColor="river-bed-500"
              />
            }>
            <TableOrder
              key={`${id}-${status}-${page}`}
              orders={results}
              total={total}
              currentPage={skip / 10 + 1}
            />
          </Suspense>
        </div>
      </div>
    </Flex>
  );
};

export default OrderListPage;
