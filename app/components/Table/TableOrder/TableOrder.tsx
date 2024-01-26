"use client";

// Components
import DataGrid from "@/components/common/DataGrid/DataGrid";
import IdNode from "../common/IdNode";
import FormatDateNode from "../common/FormatDateNode";
import StatusNode from "../common/StatusNode";
import CustomerNode from "../common/CustomerNode";
import { ProductsNode } from "../common/ProductsNode";
import RevenueNode from "../common/RevenueNode";

//Types
import { ColumnType, Order } from "@/types";

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
        <IdNode id={id} onChange={handleChangeCheckbox} />
      ),
    },
    {
      key: "createdAt",
      title: "Date",
      customNode: (_, { createdAt }) => <FormatDateNode date={createdAt} />,
    },
    {
      key: "status",
      title: "Status",
      customNode: (_, { status }) => <StatusNode status={status} />,
    },
    {
      key: "customer",
      title: "Customer",
      customNode: (_, { customer }) => {
        return <CustomerNode customer={customer} />;
      },
    },
    {
      key: "products",
      title: "Products",
      customNode: (_, { products }) => <ProductsNode products={products} />,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <RevenueNode revenue={revenue} />,
    },
  ];

  return <DataGrid data={orders} columns={columns} />;
};

export default TableOrder;
