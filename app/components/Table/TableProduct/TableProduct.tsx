"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";
import CustomCheckBoxField from "../common/CustomCheckBoxField";
import CustomAvatarName from "../common/CustomAvatarName";
import CustomNumberFormatNode from "../common/CustomNumberFormatNode";
import CustomDateFormatNode from "../common/CustomDateFormatNode";

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
      customNode: (_, { price }) => <CustomNumberFormatNode revenue={price} />,
    },
    {
      key: "isAvailable",
      title: "Is Available",
      customNode: (_, { isAvailable }) => (
        <h6 className="text-xs font-semibold">{isAvailable ? "Yes" : "No"}</h6>
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
