// Components
import { ProductTable } from "@/components";
import OrderSearch from "@/components/OrderSearch/OrderSearch";
import { Button, Flex, Text } from "@tremor/react";

// Icons
import { RiArrowDropDownLine } from "react-icons/ri";

// Services
import { getOrders } from "@/services/ordersServices";

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
      <Flex>
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new order
          </Text>
        </Button>
        <Button className="font-bold bg-transparent border-primary focus:border-primary hover:border-primary focus:opacity-75 hover:opacity-75 text-primary focus:text-white dark:text-dark-tremor-content-title hover:bg-transparent active:bg-primary focus:bg-primary rounded-lg hover:!shadow-btn-primary-hover dark:border-primary dark:bg-transparent dark:hover:border-primary dark:hover:bg-transparent">
          <Flex className="uppercase text-xs">
            Filters <RiArrowDropDownLine />
          </Flex>
        </Button>
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <OrderSearch />
        <ProductTable data={filteredData} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
