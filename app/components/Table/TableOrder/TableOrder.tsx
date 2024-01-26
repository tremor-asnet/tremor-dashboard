"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomList,
  CustomNumberFormat,
  CustomStatus,
} from "@/components/Table/common";

//Types
import { ColumnType, Order } from "@/types";

// Constants
import { ROUTES } from "@/constants";

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
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <CustomNumberFormat value={revenue} />,
    },
  ];

  return <DataGrid data={orders} columns={columns} />;
};

export default TableOrder;
