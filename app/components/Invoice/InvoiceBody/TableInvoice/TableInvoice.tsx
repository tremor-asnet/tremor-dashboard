"use client";

// Components
import { DataGrid } from "@/components";
import { Text } from "@tremor/react";

// Types
import { TInvoiceDetail, ColumnType } from "@/types";

// Helpers
import { formattedNumber } from "@/helpers";

// Constants
import { CURRENCY } from "@/constants";

// Styles
import "@/styles/products.css";

export const TableInvoice = ({ details }: { details: TInvoiceDetail[] }) => {
  // Invoice Body Table Props
  const columns: ColumnType<TInvoiceDetail>[] = [
    {
      key: "name",
      title: "Item",
      customNode: (_, { name }) => (
        <Text className="md:min-w-[250px]">{name}</Text>
      ),
      sortable: false,
    },
    {
      key: "quantity",
      title: "Qty",
      customNode: (_, { quantity }) => <Text>{quantity}</Text>,
      sortable: false,
    },
    {
      key: "rate",
      title: "Rate",
      customNode: (_, { rate }) => (
        <div>
          <Text>
            {formattedNumber({
              value: rate,
              currency: CURRENCY.DOLLAR,
              delimiter: " ",
            })}
          </Text>
          <Text className="total hidden mt-6 dark:!text-white">Total</Text>
        </div>
      ),
      sortable: false,
    },
    {
      key: "amount",
      title: "Amount",
      customNode: (_, { amount }) => (
        <div>
          <Text>
            {formattedNumber({
              value: amount,
              currency: CURRENCY.DOLLAR,
              delimiter: " ",
            })}
          </Text>
          <Text
            className="total hidden mt-6 flex-col items-end dark:!text-white"
            data-testid="total-price">
            {formattedNumber({
              value: 698, // TODO will count sum rate or amount
              currency: CURRENCY.DOLLAR,
            })}
          </Text>
        </div>
      ),
      sortable: false,
    },
  ];
  return (
    <DataGrid
      data={details}
      columns={columns}
      filterBy="isAvailable"
      keyword="invoice"
      className="!shadow-none"
      hasPagination={false}
    />
  );
};

export default TableInvoice;
