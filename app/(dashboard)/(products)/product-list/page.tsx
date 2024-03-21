import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Flex } from "@tremor/react";

// Components
import { LoadingIndicator, InputDebounce, Filter } from "@/ui/components";

const TableProduct = dynamic(
  () => import("@/ui/features/products/TableProduct/TableProduct"),
);

// Services
import { getProducts } from "@/services";

// Types
import { ProductResponse, TSearchParams } from "@/types";

// Constants
import { ROUTES, productList } from "@/constants";

const ProductListPage = async ({
  searchParams,
}: {
  searchParams?: TSearchParams;
}) => {
  // TODO: Update key whenever the filter data change

  const { query, filter, page, sortBy } = searchParams as TSearchParams;

  let response: ProductResponse = await getProducts({
    pageNum: page,
    available: filter,
    query,
    sortBy,
  });

  const { results, total, skip } = response;

  return (
    <Flex flexDirection="col" className="gap-4">
      <Flex className="relative">
        <Link
          href={ROUTES.NEW_PRODUCT}
          className="uppercase text-xs font-bold text-white dark:text-white py-3 px-5 bg-gradient-primary dark:bg-gradient-pickled border-none dark:text-white rounded-lg shadow-btn-primary hover:shadow-btn-primary-hover tracking-wide">
          new product
        </Link>
        <Filter title="Is Available" listOption={productList} />
      </Flex>
      <div className="w-full bg-white rounded-lg dark:bg-dark-tremor-primary">
        <InputDebounce field="query" param="page" valueParam="1" />
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
            products={results}
            total={total}
            currentPage={skip / 10 + 1}
          />
        </Suspense>
      </div>
    </Flex>
  );
};

export default ProductListPage;
