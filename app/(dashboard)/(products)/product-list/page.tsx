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
import { ProductResponse } from "@/types";

// Constants
import { ROUTES } from "@/constants";

type SearchParamsProduct = {
  query: string;
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
    query = "",
    isAvailable = -1,
    page = 1,
  } = searchParams as SearchParamsProduct;

  const response: ProductResponse = await getProducts(page, isAvailable, query);

  const { results, total, skip } = response;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Link
          href={ROUTES.NEW_PRODUCT}
          className="uppercase text-xs font-bold text-white dark:text-white py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white rounded-lg shadow-btn-primary hover:shadow-btn-primary-hover tracking-wide">
          new product
        </Link>
        <ProductFilter title="Filters" />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputSearch field="query" />
        <Suspense
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
            key={`${query}-${isAvailable}-${page}`}
            products={results}
            isAvailable={isAvailable.toString()}
            keyword={query}
            total={total}
            currentPage={skip / 10 + 1}
          />
        </Suspense>
      </div>
    </Flex>
  );
};

export default ProductListPage;
