import { Button, Flex, Text } from "@tremor/react";

// Components
import { OrderFilter, OrderSearch } from "@/components";
import OrderTable from "@/components/OrderTable";

// Services
import { getOrders } from "@/services";

const OrderListPage = async () => {
  const orderListData = await getOrders();

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
        <OrderTable data={orderListData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
