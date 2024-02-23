// Components
import { Suspense } from "react";
import { Flex } from "@tremor/react";
import Link from "next/link";
import { InputSearch, LoadingIndicator } from "@/components";
import ProductFilter from "../components/ProductFilter";
import TableProduct from "../components/TableProduct/TableProduct";

// Services
import { getProducts } from "@/services";

// Types
import { Product, ProductResponse } from "@/types";

// Helpers
import { filterProductList, searchProductDataByValue } from "@/helpers";

// Constants
import { ROUTES } from "@/constants";

type SearchParamsProduct = {
  productName: number;
  isAvailable: number;
  page?: number;
};

const ProductListPage = async ({
  searchParams,
}: {
  searchParams?: SearchParamsProduct;
}) => {
  // TODO: Update key whenever the filter data change

  const {
    productName = -1,
    isAvailable = -1,
    page = 1,
  } = searchParams as SearchParamsProduct;

  const response: ProductResponse = await getProducts(
    page,
    isAvailable,
    productName,
  );

  const { results, total, skip } = response;

  // if (productName) {
  //   filteredData = searchProductDataByValue<Product>(
  //     productListData,
  //     "productName",
  //     productName,
  //   );
  // }

  // filteredData = isAvailable
  //   ? filterProductList(
  //       filteredData,
  //       "isAvailable",
  //       String(isAvailable).toLowerCase() === "true",
  //     )
  //   : filteredData;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Link
          href={ROUTES.NEW_PRODUCT}
          className="uppercase text-xs text-white font-medium dark:text-white py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white rounded-lg">
          new product
        </Link>
        <ProductFilter title="Filters" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary min-h-[calc(100vh-12rem)]">
        <InputSearch field="productName" />
        <Suspense
          key={`${productName}-${isAvailable}`}
          fallback={
            <LoadingIndicator
              additionalClass="flex justify-center items-center"
              width={8}
              height={8}
              isFullWidth={false}
              fillColor="river-bed-500"
            />
          }>
          <TableProduct
            key={`${productName}-${isAvailable}-${page}`}
            products={results}
            isAvailable={isAvailable.toString()}
            keyword={productName.toString()}
            total={total}
            currentPage={skip / 10 + 1}
          />
        </Suspense>
      </div>
    </Flex>
  );
};

export default ProductListPage;
