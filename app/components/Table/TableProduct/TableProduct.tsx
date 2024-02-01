"use client";

import { useState } from "react";

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

interface TableProductProps {
  products: Product[];
  isAvailable: string;
  keyword: string;
}

const TableProduct = ({
  products,
  isAvailable,
  keyword,
}: TableProductProps) => {
  const [sort, setSort] = useState<{ keyToSort: string; direction: string }>({
    keyToSort: "product",
    direction: "asc",
  });

  const handleCheckboxChange = () => {
    // TODO: Handle checkbox change here
  };

  // Handle sort by categories
  const handleHeaderClick = (column: ColumnType<Product>) => {
    setSort({
      keyToSort: column.key,
      direction:
        column.key === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
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
    },
    {
      key: "product",
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
        <p className="text-xs dark:text-white font-semibold">
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
      data={products}
      columns={columns}
      filterBy={isAvailable}
      keyword={keyword}
      onHeaderClick={handleHeaderClick}
    />
  );
};

export default TableProduct;
