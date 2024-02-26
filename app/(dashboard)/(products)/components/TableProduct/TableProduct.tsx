"use client";

// Components
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomNumberFormat,
} from "@/components/Table/common";
import { DataGrid } from "@/components";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ROUTES } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TableProductProps {
  products: Product[];
  isAvailable: string;
  keyword: string;
  total: number;
  currentPage: number;
}

export interface SortItem {
  key: string;
  direction: string;
}

const TableProduct = ({
  products,
  isAvailable,
  keyword,
  total,
  currentPage,
}: TableProductProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());

  const handleCheckboxChange = () => {
    // TODO: Handle checkbox change here
  };

  const handlePageChange = (page: number) => {
    newParams.set("page", page.toString());
    router.push(`${pathName}?${newParams}`);
  };

  // Product Table Props
  const columns: ColumnType<Product>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <CustomCheckBoxField
          id={id}
          link={`${ROUTES.PRODUCT_LIST}/${id}`}
          onChange={handleCheckboxChange}
        />
      ),
      sortable: true,
    },
    {
      key: "productName",
      title: "Product",
      customNode: (_, { productName, image }) => (
        <CustomAvatarName avatar={image} text={productName} />
      ),
      sortable: true,
    },
    {
      key: "price",
      title: "Price",
      customNode: (_, { price }) => <CustomNumberFormat value={price} />,
      sortable: true,
    },
    {
      key: "isAvailable",
      title: "Is Available",
      customNode: (_, { isAvailable }) => (
        <p className="text-xs dark:text-lighter font-semibold">
          {isAvailable ? "Yes" : "No"}
        </p>
      ),
      sortable: true,
    },
    {
      key: "providerName",
      title: "Provider Name",
      sortable: true,
    },
    {
      key: "createdAt",
      title: "Created Date",
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
      sortable: true,
    },
  ];

  const sortedProducts = products.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt),
  );

  return (
    <DataGrid
      data={sortedProducts}
      columns={columns}
      filterBy={isAvailable}
      keyword={keyword}
      currentPageNumber={currentPage}
      total={total}
      onPageChange={handlePageChange}
    />
  );
};

export default TableProduct;
