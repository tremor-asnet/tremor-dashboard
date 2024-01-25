// Components
import { Button, Flex, Text } from "@tremor/react";

// Components
import { InputSearch, OrderFilter, OrderTable } from "@/components";

// Services
import { getOrders } from "@/services";

// Types
import { ProductTableData } from "@/types";

type SearchParams = {
  query: string;
  status: string;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const orderListData: ProductTableData[] = await getOrders();

  const { query = "" } = searchParams as SearchParams;
  const { status = "" } = searchParams as SearchParams;

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
        (item: ProductTableData) => item.status.toString() === status,
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
        <InputSearch />
        <OrderTable data={filteredData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
