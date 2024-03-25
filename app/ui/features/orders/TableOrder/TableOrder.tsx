"use client";

// Components
import {
  IdentifyField,
  CustomDateFormat,
  CustomList,
  CustomNumberFormat,
  CustomStatus,
  CustomQuantity,
  CustomAvatarName,
} from "@/ui/components";
import { DataGrid } from "@/ui/components";

//Types
import { ColumnType, Order } from "@/types";

// Constants
import { ROUTES } from "@/constants";

// Helpers
import { transformOrders } from "@/helpers";

interface TableOrderProps {
  orders: Order[];
  total: number;
  currentPage: number;
}

const TableOrder = ({ orders, total, currentPage }: TableOrderProps) => {
  // Table Columns
  const columns: ColumnType<Order>[] = [
    {
      key: "id",
      title: "Id",
      customNode: (_, { id }) => (
        <IdentifyField id={id} link={`${ROUTES.ORDER_LIST}/${id}`} />
      ),
      isSortable: true,
    },
    {
      key: "createdAt",
      title: "Date",
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
      isSortable: true,
    },
    {
      key: "status",
      title: "Status",
      customNode: (_, { status }) => <CustomStatus status={status} />,
      isSortable: true,
    },
    {
      key: "customerName",
      title: "Customer",
      customNode: (_, { customer }) => {
        return (
          <CustomAvatarName avatar={customer.avatar} text={customer.fullName} />
        );
      },
    },
    {
      key: "productName",
      title: "Products",
      customNode: (_, { products }) => <CustomList products={products} />,
    },
    {
      key: "count",
      title: "quantity",
      customNode: (_, { products }) => <CustomQuantity products={products} />,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <CustomNumberFormat value={revenue} />,
      isSortable: true,
    },
  ];

  // Arrange newly added items at the top of the table.
  let sortedOrders = orders.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt),
  );

  // Handle sort with field inside the object nested
  sortedOrders = transformOrders(sortedOrders);

  return (
    <DataGrid
      data={sortedOrders}
      columns={columns}
      currentPageNumber={currentPage}
      total={total}
    />
  );
};

export default TableOrder;
