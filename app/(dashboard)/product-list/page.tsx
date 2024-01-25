// Components
import { ProductTable, OrderFilter, OrderSearch } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

// Services
import { getProducts } from "@/services/productServices";

// Types
import { Product } from "@/types";

const ProductListPage = async () => {
  // TODO: Update key whenever the filter data change

  const productListData: Product[] = await getProducts();

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
        <OrderSearch />
        <ProductTable key={1} data={productListData} />
      </div>
    </Flex>
  );
};

export default ProductListPage;
