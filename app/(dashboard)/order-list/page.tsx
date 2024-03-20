import dynamic from "next/dynamic";
import { Suspense } from "react";

// Components
import { Flex } from "@tremor/react";
import { Filter, InputSearch, LoadingIndicator } from "@/ui/components";

const TableOrder = dynamic(
  () => import("@/ui/features/orders/TableOrder/TableOrder"),
);

// Services
import { getOrders } from "@/services";

// Types
import { OrderResponse, TSearchParams } from "@/types";

// Constants
import { orderListOption } from "@/constants";

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: TSearchParams;
}) => {
  const {
    query = "",
    filter = "",
    page = 1,
    sortBy = "",
  } = searchParams as TSearchParams;

  const response: OrderResponse = await getOrders(page, filter, query, sortBy);

  const { results, total, skip } = response;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative justify-end">
        <Filter title="Status" listOption={orderListOption} />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch field="id" />
        <div className="w-full relative min-h-[183px] rounded-lg">
          <Suspense
            key={`${query}-${filter}-${page}-${sortBy}`}
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
              key={`${query}-${filter}-${page}-${sortBy}`}
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
