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

export const TableInvoice = ({
  details,
  totalCost,
}: {
  details: TInvoiceDetail[];
  totalCost: number;
}) => {
  // Invoice Body Table Props
  const columns: ColumnType<TInvoiceDetail>[] = [
    {
      key: "name",
      title: "Item",
      customNode: (_, { productName }) => (
        <Text className="max-w-[250px] md:max-w-sm truncate">
          {productName}
        </Text>
      ),
      sortable: false,
    },
    {
      key: "quantity",
      title: "Qty",
      customNode: (_, { quantity }) => (
        <Text className="dark:text-lighter">{quantity}</Text>
      ),
      sortable: false,
    },
    {
      key: "rate",
      title: "Rate",
      customNode: (_, { price }) => (
        <div>
          <Text className="dark:text-lighter">
            {formattedNumber({
              value: price,
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
      customNode: (_, { price, quantity }) => (
        <div>
          <Text className="dark:text-lighter">
            {formattedNumber({
              value: price * quantity,
              currency: CURRENCY.DOLLAR,
              delimiter: " ",
            })}
          </Text>
          <Text
            className="total hidden mt-6 flex-col items-end dark:!text-white"
            data-testid="total-price">
            {formattedNumber({
              value: totalCost,
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
