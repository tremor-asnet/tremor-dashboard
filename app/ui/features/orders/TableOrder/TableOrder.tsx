"use client";

// Components
import {
  CustomCheckBoxField,
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
  status: string;
  keyword: string;
  total: number;
  currentPage: number;
}

const TableOrder = ({
  orders,
  status,
  keyword,
  total,
  currentPage,
}: TableOrderProps) => {
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
      sortable: true,
    },
    {
      key: "createdAt",
      title: "Date",
      customNode: (_, { createdAt }) => <CustomDateFormat date={createdAt} />,
      sortable: true,
    },
    {
      key: "status",
      title: "Status",
      customNode: (_, { status }) => <CustomStatus status={status} />,
      sortable: true,
    },
    {
      key: "customerName",
      title: "Customer",
      customNode: (_, { customer }) => {
        return (
          <CustomAvatarName avatar={customer.avatar} text={customer.fullName} />
        );
      },
      sortable: true,
    },
    {
      key: "productName",
      title: "Products",
      customNode: (_, { products }) => <CustomList products={products} />,
      sortable: true,
    },
    {
      key: "count",
      title: "quantity",
      customNode: (_, { products }) => <CustomQuantity products={products} />,
      sortable: true,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <CustomNumberFormat value={revenue} />,
      sortable: true,
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
      filterBy={status}
      keyword={keyword}
      currentPageNumber={currentPage}
      total={total}
    />
  );
};

export default TableOrder;
