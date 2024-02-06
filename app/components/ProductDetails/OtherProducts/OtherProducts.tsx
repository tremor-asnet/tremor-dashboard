"use client";

// Components
import {
  CustomAvatarName,
  CustomNumberFormat,
} from "@/components/Table/common";
import { DataGrid } from "@/components";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ProgressBar } from "@tremor/react";

//Styles
import "@/styles/products.css";

interface OtherProductsProps {
  products: Product[];
  isAvailable: string;
  keyword: string;
  className?: string;
  hasPagination?: boolean;
  hasSort?: boolean;
}

const OtherProducts = ({
  products,
  isAvailable,
  keyword,
  className = "",
  hasPagination = true,
  hasSort = true,
}: OtherProductsProps) => {
  // Other Product Table Props
  const columns: ColumnType<Product>[] = [
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
      title: "Availability",
      customNode: (_, { isAvailable }) => (
        <p className="text-xs dark:text-lighter font-semibold product-availability">
          {isAvailable ? (
            <ProgressBar value={80} color="green" className="w-32" />
          ) : (
            <ProgressBar value={60} color="orange" className="w-32" />
          )}
        </p>
      ),
    },
    {
      key: "id",
      title: "Id",
    },
  ];

  return (
    <DataGrid
      data={products}
      columns={columns}
      filterBy={isAvailable}
      keyword={keyword}
      className={className}
      hasPagination={hasPagination}
      hasSort={hasSort}
    />
  );
};

export default OtherProducts;
