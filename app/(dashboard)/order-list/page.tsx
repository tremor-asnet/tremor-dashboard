import { Button, Flex, Text } from "@tremor/react";

// Components
import { ProductTable, OrderFilter, OrderSearch } from "@/components";

// Services
import { getOrders } from "@/services";

// Types
import { TProductTable } from "@/types";

type TSearchParams = {
  query: string;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: TSearchParams;
}) => {
  const orderListData: TProductTable[] = await getOrders();

  const { query } = searchParams || { query: "" };

  let filteredData = orderListData;

  if (query) {
    filteredData = orderListData?.filter(
      item =>
        item.products?.find(product =>
          product.name.toLowerCase().includes(query.toLowerCase()),
        ),
    );
  }

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
        <ProductTable data={filteredData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
