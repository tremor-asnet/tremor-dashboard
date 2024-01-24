import { Flex, TableCell, TableRow, Text } from "@tremor/react";
import Image from "next/image";

// Constants
import { CURRENCY, FLAG_SRC } from "@/constants";

// Helpers
import { formattedNumber } from "@/helpers";

// Types
import { ISalesByCountry } from "@/types";

interface SalesByCountryRowProps extends ISalesByCountry {
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
    <TableRow key={id} className="border-solid">
      <TableCell className="px-4 py-3 w-6/12 sm:w-[30%] border-gray-500">
        <Flex className="items-center">
          <Image
            src={FLAG_SRC[id]}
            width="24"
            height="18"
            alt={country}
            priority
          />
          <Flex className="items-start flex-col ml-6">
            <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25] tracking-[0.03333em]">
              Country:
            </Text>
            <Text className="text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5]">
              {country}
            </Text>
          </Flex>
        </Flex>
      </TableCell>
      <TableCell className="px-4 py-3 text-left">
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
        <TableCell className="px-4 py-3 text-left value">
          <Text className="text-xs dark:text-dark-romance font-semibold leading-[1.25]">
            Value:
          </Text>
          <Text className="text-left text-tremor-content-title dark:text-dark-tremor-content-title leading-[1.5] truncate max-w-[60px] xs:max-w-[70px] xl:max-w-[105px]">
            <span>
              {formattedNumber({
                value,
                currency: CURRENCY.DOLLAR,
              })}
            </span>
          </Text>
        </TableCell>
      )}
      <TableCell
        className={`px-4 py-3 text-left bounce ${
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
