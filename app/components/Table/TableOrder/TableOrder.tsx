"use client";

// Components
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomList,
  CustomNumberFormat,
  CustomStatus,
  CustomQuantity,
} from "@/components/Table/common";
import { DataGrid } from "@/components";

//Types
import { ColumnType, Order } from "@/types";

// Constants
import { ROUTES } from "@/constants";

interface TableOrderProps {
  orders: Order[];
  status: string;
  keyword: string;
}

const TableOrder = ({ orders, status, keyword }: TableOrderProps) => {
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
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
    },
    {
      key: "status",
      title: "Status",
      customNode: (_, { status }) => <CustomStatus status={status} />,
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
      customNode: (_, { products }) => <CustomList products={products} />,
    },
    {
      key: "count",
      title: "count",
      customNode: (_, { products }) => <CustomQuantity quantity={products} />,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <CustomNumberFormat value={revenue} />,
    },
  ];

  return (
    <DataGrid
      data={orders}
      columns={columns}
      filterBy={status}
      keyword={keyword}
    />
  );
};

export default TableOrder;
