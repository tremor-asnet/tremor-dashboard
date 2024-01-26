// Components
import { Button, Flex, Text } from "@tremor/react";

// Components
import { InputSearch, OrderFilter } from "@/components";
import TableOrder from "@/components/Table/TableOrder/TableOrder";

// Services
import { getOrders } from "@/services";

// Types
import { Order } from "@/types";

type SearchParams = {
  query: string;
  status: string;
};

const OrderListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParams;
}) => {
  const orderListData: Order[] = await getOrders();

  const { query = "", status = "" } = searchParams as SearchParams;

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
    ? filteredData.filter(item => item.status.toString() === status)
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
        <TableOrder key={`${query}-${status}`} orders={filteredData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
