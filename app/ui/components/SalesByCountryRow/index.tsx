import { Flex, TableCell, TableRow, Text } from "@tremor/react";
import Image from "next/image";

// Constants
import { CURRENCY, FLAG_SRC } from "@/constants";

// Helpers
import { formattedNumber, moneyFormat } from "@/helpers";

// Types
import { SalesByCountryData } from "@/types";

interface SalesByCountryRowProps
  extends Pick<
    SalesByCountryData,
    "id" | "country" | "sales" | "value" | "bounce"
  > {
  isAnalytics: boolean;
}

const SalesByCountryRow = ({
  isAnalytics,
  id,
  country,
  sales,
  value,
  bounce,
}: SalesByCountryRowProps) => {
  return (
    <TableRow
      key={id}
      className="border-solid border-b !border-gray-100 dark:!border-grayish w-[100%]">
      <TableCell className="px-4 py-3 w-6/12 w-[25%]">
        <Flex>
          <div className="w-[34px]">
            <Image
              src={FLAG_SRC[id]}
              width="34"
              height="28"
              alt={country}
              priority
            />
          </div>
          <Flex alignItems="start" className="flex-col ml-6">
            <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25] tracking-[0.03333em]">
              Country:
            </Text>
            <Text className="text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
              {country}
            </Text>
          </Flex>
        </Flex>
      </TableCell>
      <TableCell className="px-4 py-3 text-left w-[25%]">
        <Text className="text-left text-xs dark:text-dark-romance font-semibold leading-[1.25]">
          Sales:
        </Text>
        <Text className="text-left text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
          {formattedNumber({
            value: sales,
            isDecimalNumber: true,
          })}
        </Text>
      </TableCell>
      {isAnalytics && (
        <TableCell className="px-4 py-3 text-left value w-[25%]">
          <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25]">
            Value:
          </Text>
          <Text className="text-left text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5] truncate max-w-[60px] xs:max-w-[80px] xl:max-w-[105px]">
            <span>
              {moneyFormat({
                value,
                currency: CURRENCY.DOLLAR,
              })}
            </span>
          </Text>
        </TableCell>
      )}
      <TableCell
        className={`w-[25%] px-4 py-3 text-left bounce ${
          isAnalytics && "hidden md:table-cell"
        }`}>
        <Text className="text-left text-xs dark:text-dark-romance font-semibold leading-[1.25]">
          Bounce:
        </Text>
        <Text className="text-left text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
          <span>{bounce}%</span>
        </Text>
      </TableCell>
    </TableRow>
  );
};

export default SalesByCountryRow;
