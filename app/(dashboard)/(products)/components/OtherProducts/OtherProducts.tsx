"use client";

// Components
import {
  CustomAvatarName,
  CustomNumberFormat,
} from "@/components/Table/common";
import { DataGrid } from "@/components";
import Link from "next/link";
import { ProgressBar } from "@tremor/react";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ROUTES } from "@/constants";

// Styles
import "@/styles/products.css";

export const OtherProducts = ({ products }: { products: Product[] }) => {
  // Other Product Table Props
  const columns: ColumnType<Product>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <Link
          prefetch={true}
          href={`${ROUTES.PRODUCT_LIST}/${id}`}
          className="text-xs dark:text-lighter font-semibold leading-[15px] tracking-[0.4px] order-id hover:underline">
          &#35;{id}
        </Link>
      ),
      sortable: false,
    },
    {
      key: "product",
      title: "Product",
      customNode: (_, { productName, image }) => (
        <CustomAvatarName avatar={image} text={productName} />
      ),
      sortable: false,
    },
    {
      key: "price",
      title: "Price",
      customNode: (_, { price }) => <CustomNumberFormat value={price} />,
      sortable: false,
    },
    {
      key: "isAvailable",
      title: "Is Available",
      customNode: (_, { isAvailable }) => (
        <p className="text-xs dark:text-lighter font-semibold">
          {isAvailable ? "Yes" : "No"}
        </p>
      ),
      sortable: false,
    },
  ];
  return (
    <DataGrid
      data={products}
      columns={columns}
      filterBy="isAvailable"
      keyword="productName"
      className="!shadow-none"
      hasPagination={false}
    />
  );
};

export default OtherProducts;
