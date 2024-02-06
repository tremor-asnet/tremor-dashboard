"use client";

import { useMemo, useState } from "react";

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
import { DIRECTION } from "@/constants/common";

// Helpers
import { getSortedArray } from "@/helpers";

interface TableProductProps {
  products: Product[];
  isAvailable: string;
  keyword: string;
}

export interface SortItem {
  key: string;
  direction: string;
}

const TableProduct = ({
  products,
  isAvailable,
  keyword,
}: TableProductProps) => {
  const [sort, setSort] = useState<SortItem>({
    key: "",
    direction: DIRECTION.ASC,
  });

  const handleCheckboxChange = () => {
    // TODO: Handle checkbox change here
  };

  // Handle sort by categories
  const handleHeaderClick = (column: ColumnType<Product>) => {
    const direction =
      column.key === sort.key
        ? sort.direction === DIRECTION.ASC
          ? DIRECTION.DESC
          : DIRECTION.ASC
        : DIRECTION.DESC;

    setSort(prev => ({
      ...prev,
      key: column.key,
      direction,
    }));
  };

  const sortedArray = getSortedArray<Product>(
    products,
    sort.key as keyof Product,
    sort.direction,
  );

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
    },
    {
      key: "productName",
      title: "Product",
      customNode: (_, { productName, image }) => (
        <CustomAvatarName avatar={image} text={productName} />
      ),
    },
    {
      key: "price",
      title: "Price",
      customNode: (_, { price }) => <CustomNumberFormat value={price} />,
    },
    {
      key: "isAvailable",
      title: "Is Available",
      customNode: (_, { isAvailable }) => (
        <p className="text-xs dark:text-lighter font-semibold">
          {isAvailable ? "Yes" : "No"}
        </p>
      ),
    },
    {
      key: "providerName",
      title: "Provider Name",
    },
    {
      key: "createdAt",
      title: "Created Date",
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
    },
  ];

  return (
    <DataGrid
      data={sortedArray}
      columns={columns}
      sortItem={sort}
      filterBy={isAvailable}
      keyword={keyword}
      onHeaderClick={handleHeaderClick}
    />
  );
};

export default TableProduct;
