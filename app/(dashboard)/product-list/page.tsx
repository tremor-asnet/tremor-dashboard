// Components
import { TableProduct, InputSearch, ProductFilter } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

// Services
import { getProducts } from "@/services";

// Types
import { Product } from "@/types";

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
    filteredData = productListData?.filter((item: Product) =>
      item.productName.toLowerCase().includes(productName.toLowerCase()),
    );
  }

  filteredData = isAvailable
    ? filteredData.filter(
        (item: Product) => item.isAvailable === (Number(isAvailable) === 0),
      )
    : filteredData;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex>
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
