"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormatNode,
  CustomNumberFormatNode,
} from "../common";

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
      customNode: (_, { price }) => <CustomNumberFormatNode value={price} />,
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
      customNode: (_, { createdAt }) => (
        <CustomDateFormatNode date={createdAt} />
      ),
    },
  ];

  return <DataGrid data={products} columns={columns} />;
};

export default TableProduct;
