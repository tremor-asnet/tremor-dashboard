import { Suspense } from "react";
import { Button, Flex, Text } from "@tremor/react";

// Components
import {
  InputSearch,
  LoadingIndicator,
  OrderFilter,
  TableOrder,
} from "@/components";

// Services
import { getOrders } from "@/services";

// Types
import { Order, OrderProduct } from "@/types";

// Helpers
import { filterOrderList, searchOrderDataByValue } from "@/helpers";

type SearchParams = {
  productName?: string;
  status?: string;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const orderListData: Order[] = await getOrders();

  const { productName = "", status = "" } = searchParams as SearchParams;

  let filteredData = orderListData;

  if (productName) {
    filteredData = searchOrderDataByValue<Order, OrderProduct>(
      orderListData,
      "products",
      "name",
      productName,
    );
  }

  filteredData = status
    ? filterOrderList<Order>(filteredData, "status", status)
    : filteredData;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new order
          </Text>
        </Button>
        <OrderFilter title="Filters" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch />
        <Suspense
          key={`${productName}-${status}`}
          fallback={
            <LoadingIndicator
              additionalClass="flex justify-center items-center"
              width={8}
              height={8}
              isFullWidth={false}
              fillColor="river-bed-500"
            />
          }>
          <TableOrder
            key={`${productName}-${status}`}
            orders={filteredData}
            status={status}
            keyword={productName}
          />
        </Suspense>
      </div>
    </Flex>
  );
};

export default OrderListPage;
