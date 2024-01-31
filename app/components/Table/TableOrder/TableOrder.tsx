"use client";

import { useEffect, useState } from "react";

// Components
import {
  CustomAvatarName,
  CustomCheckBoxField,
  CustomDateFormat,
  CustomList,
  CustomNumberFormat,
  CustomStatus,
} from "@/components/Table/common";
import { DataGrid, LoadingIndicator } from "@/components";

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
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    setLoading(true);

    // Delay to check show loading
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [status, keyword]);

  if (loading === true) {
    return (
      <LoadingIndicator
        additionalClass="flex justify-center items-center"
        width={8}
        height={8}
        isFullWidth={false}
        fillColor="river-bed-500"
      />
    );
  }

  return <DataGrid data={orders} columns={columns} />;
};

export default TableOrder;
