"use client";

// Components
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomNumberFormat,
} from "@/components/Table/common";
import { DataGrid, StarRating } from "@/components";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ROUTES } from "@/constants";
import { ProgressBar } from "@tremor/react";

//Styles
import "@/styles/products.css";

interface OtherProductsProps {
  products: Product[];
  isAvailable: string;
  keyword: string;
  className?: string;
  hasShowPagination?: boolean;
  hasSort?: boolean;
}

const OtherProducts = ({
  products,
  isAvailable,
  keyword,
  className = "",
  hasShowPagination = true,
  hasSort = true,
}: OtherProductsProps) => {
  const handleCheckboxChange = () => {
    // TODO: Handle checkbox change here
  };

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
      key: "review",
      title: "Review",
      customNode: (_, {}) => <StarRating isFullRaring={true} />,
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
      customNode: (_, { id }) => (
        <CustomCheckBoxField
          id={id}
          link={`${ROUTES.PRODUCT_LIST}/${id}`}
          onChange={handleCheckboxChange}
        />
      ),
    },
  ];

  return (
    <DataGrid
      data={products}
      columns={columns}
      filterBy={isAvailable}
      keyword={keyword}
      className={className}
      hasShowPagination={hasShowPagination}
      hasSort={hasSort}
    />
  );
};

export default OtherProducts;
