"use client";

// Components
import {
  IdentifyField,
  CustomDateFormat,
  CustomNumberFormat,
  CustomAvatarName,
  DataGrid,
} from "@/ui/components";
import { Text } from "@tremor/react";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ROUTES } from "@/constants";

interface TableProductProps {
  products: Product[];
  total: number;
  currentPage: number;
}

const TableProduct = ({ products, total, currentPage }: TableProductProps) => {
  // Product Table Props
  const columns: ColumnType<Product>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <IdentifyField id={id} link={`${ROUTES.PRODUCT_LIST}/${id}`} />
      ),
      isSortable: true,
    },
    {
      key: "productName",
      title: "Product",
      customNode: (_, { productName, image }) => (
        <CustomAvatarName avatar={image} text={productName} />
      ),
      isSortable: true,
    },
    {
      key: "price",
      title: "Price",
      customNode: (_, { price }) => <CustomNumberFormat value={price} />,
      isSortable: true,
    },
    {
      key: "isAvailable",
      title: "Is Available",
      customNode: (_, { quantity }) => (
        <Text className="text-xs dark:text-lighter font-semibold">
          {quantity && quantity > 0 ? "Yes" : "No"}
        </Text>
      ),
      isSortable: true,
    },
    {
      key: "providerName",
      title: "Provider Name",
      isSortable: true,
    },
    {
      key: "createdAt",
      title: "Created Date",
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
      isSortable: true,
    },
  ];

  return (
    <DataGrid
      data={products}
      columns={columns}
      currentPageNumber={currentPage}
      total={total}
    />
  );
};

export default TableProduct;
