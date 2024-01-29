"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomNumberFormat,
} from "@/components/Table/common";

// Types
import { Product, ColumnType } from "@/types";

// Constants
import { ROUTES } from "@/constants";

interface TableProductProps {
  products: Product[];
}

const TableProduct = ({ products }: TableProductProps) => {
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

  return <DataGrid data={products} columns={columns} />;
};

export default TableProduct;
