"use client";

// Components
import { ProductTable, OrderFilter, InputSearch } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

// Mocks
import { MOCK_PRODUCTS } from "@/mocks";

const ProductListPage = () => {
  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex>
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new product
          </Text>
        </Button>
        <OrderFilter title="Filter" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch onChange={() => {}} />
        <ProductTable data={MOCK_PRODUCTS} />
      </div>
    </Flex>
  );
};

export default ProductListPage;
