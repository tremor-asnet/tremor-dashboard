"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

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
import { DataGrid, Pagination } from "@/components";

//Types
import { ColumnType, Order } from "@/types";

// Constants
import { ROUTES } from "@/constants";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());

  const handleChangeCheckbox = () => {
    // TODO: handle checkbox here
  };

  const handlePageChange = (page: number) => {
    newParams.set("page", page.toString());
    router.push(`${pathName}?${newParams}`);
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
      title: "quantity",
      customNode: (_, { products }) => <CustomQuantity products={products} />,
    },
    {
      key: "revenue",
      title: "Revenue",
      customNode: (_, { revenue }) => <CustomNumberFormat value={revenue} />,
    },
  ];

  const sortedProducts = orders.sort((a, b) =>
    a.createdAt.localeCompare(b.createdAt),
  );

  return (
    <>
      <DataGrid
        data={sortedProducts}
        columns={columns}
        filterBy={status}
        keyword={keyword}
        className="!shadow-none rounded-none"
      />
      <Pagination
        currentPage={currentPage}
        pageSize={10}
        totalCount={total}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default TableOrder;
