// Components
import { Button, Flex, Text } from "@tremor/react";

// Components
import { OrderFilter, OrderSearch } from "@/components";
import OrderTable from "@/components/OrderTable";

// Services
import { getOrders } from "@/services";

// Types
import { TProductTable } from "@/types";

type TSearchParams = {
  query: string;
  status: string;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: TSearchParams;
}) => {
  const orderListData: TProductTable[] = await getOrders();

  const { query } = searchParams || { query: "" };
  const { status } = searchParams || { status: "" };

  let filteredData = orderListData;

  if (query) {
    filteredData = orderListData?.filter(
      item =>
        item.products?.find(product =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        ),
    );
  }

  filteredData = status
    ? filteredData.filter(
        (item: TProductTable) => item.status.toString() === status,
      )
    : filteredData;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new order
          </Text>
        </Button>
        <OrderFilter title="Filter" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <OrderSearch />
        <OrderTable data={filteredData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
