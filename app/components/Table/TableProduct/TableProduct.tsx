"use client";
import { useEffect, useState } from "react";

// Components
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomNumberFormat,
} from "@/components/Table/common";
import { DataGrid, LoadingIndicator } from "@/components";

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
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = () => {
    // TODO: Handle checkbox change here
  };

  // Product Table Props
  const columns: ColumnType<Product>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <CustomCheckBoxField
          id={id}
          // TODO: update route when integrate api
          link={`${ROUTES.EDIT_PRODUCT}`}
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

  useEffect(() => {
    setLoading(true);

    // Delay to check show loading
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [isAvailable, keyword]);

  if (loading === true) {
    return (
      <LoadingIndicator
        additionalClass="flex justify-center items-center"
        width={8}
        height={8}
        isFullWidth={false}
        fillColor="river-bed-500"
      />
    );
  }

  return <DataGrid data={products} columns={columns} />;
};

export default TableProduct;
