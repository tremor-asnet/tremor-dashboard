"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";

//Types
import { ColumnType, Order } from "@/types";

// Constants
import { ROUTES } from "@/constants";
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormatNode,
  CustomListNode,
  CustomNumberFormatNode,
  CustomStatusNode,
} from "../common";

interface TableOrderProps {
  orders: Order[];
}

const TableOrder = ({ orders }: TableOrderProps) => {
  const handleChangeCheckbox = () => {
    // TODO: handle checkbox here
  };

  // Table Columns
  const columns: ColumnType<Order>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <CustomCheckBoxField
          id={id}
          link={`${ROUTES.ORDER_LIST}/${id}`}
          onChange={handleChangeCheckbox}
        />
      ),
    },
    {
      key: "createdAt",
      title: "Date",
      customNode: (_, { createdAt }) => (
        <CustomDateFormatNode date={createdAt} />
      ),
    },
    {
      key: "status",
      title: "Status",
      customNode: (_, { status }) => <CustomStatusNode status={status} />,
    },
    {
      key: "customer",
      title: "Customer",
      customNode: (_, { customer }) => {
        return (
          <CustomAvatarName avatar={customer.avatar} text={customer.fullName} />
        );
      },
    },
    {
      key: "products",
      title: "Products",
      customNode: (_, { products }) => <CustomListNode products={products} />,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => (
        <CustomNumberFormatNode value={revenue} />
      ),
    },
  ];

  return <DataGrid data={orders} columns={columns} />;
};

export default TableOrder;
