"use client";

// Components
import { TableList } from "@/components";
import OrderSearch from "@/components/OrderSearch/OrderSearch";
import { Button, Flex, Text } from "@tremor/react";

// Mocks
import { TABLE_LIST_DATA } from "@/mocks";
import Select from "@/components/Select";

const OrderListPage = () => {
  const handleSearch = () => {
    // TODO: Handle search here
  };

  const handleCheckBox = () => {
    // TODO: Handle check box here
  };

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new order
          </Text>
        </Button>
        <Select />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <OrderSearch onSearch={handleSearch} />
        <TableList data={TABLE_LIST_DATA} handleCheckBox={handleCheckBox} />
      </div>
    </Flex>
  );
};

export default OrderListPage;
