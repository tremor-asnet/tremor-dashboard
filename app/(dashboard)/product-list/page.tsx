// Components
import { TableProduct, InputSearch, ProductFilter } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

// Services
import { getProducts } from "@/services";

// Types
import { Product } from "@/types";

// Helpers
import { filterProductList, searchProductDataByValue } from "@/helpers";

type SearchParamsProduct = {
  productName: string;
  isAvailable: string;
};

const ProductListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParamsProduct;
}) => {
  // TODO: Update key whenever the filter data change

  const productListData: Product[] = await getProducts();

  const { productName = "", isAvailable = "" } =
    searchParams as SearchParamsProduct;

  let filteredData = productListData;

  if (productName) {
    filteredData = searchProductDataByValue<Product>(
      productListData,
      "productName",
      productName,
    );
  }

  filteredData = isAvailable
    ? filterProductList(
        filteredData,
        "isAvailable",
        String(isAvailable).toLowerCase() === "true",
      )
    : filteredData;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Button className="py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white">
          <Text className="uppercase text-xs text-white dark:text-white">
            new product
          </Text>
        </Button>
        <ProductFilter title="Filter" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch />
        <TableProduct
          key={`${productName}-${isAvailable}`}
          products={filteredData}
        />
      </div>
    </Flex>
  );
};

export default ProductListPage;
