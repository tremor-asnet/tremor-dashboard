import { Button, Flex, Text } from "@tremor/react";

// Components
import { ProductTable, OrderFilter, OrderSearch } from "@/components";

// Services
import { getOrders } from "@/services";

const OrderListPage = async () => {
  // TODO: Change param pass to getOrders when implement pagination
  const orderListData = await getOrders(1);

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
        <ProductTable data={orderListData.results} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
