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
      key: "products",
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

  let sortedProducts = orders.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt),
  );

  /**
   * Field "Count" and "Customer" are currently inside the object
   * So move the field inside the object need to sort to the outside
   */
  sortedProducts = sortedProducts.map(item => {
    let count = 0;

    if (item.products?.length) {
      item.products.forEach(product => {
        count = count + product.count;
      });
    }

    return {
      ...item,
      count: count,
      customerName: item?.customer.fullName || "",
    };
  });

  return (
    <DataGrid
      data={sortedProducts}
      columns={columns}
      filterBy={status}
      keyword={keyword}
    />
  );
};

export default TableOrder;
