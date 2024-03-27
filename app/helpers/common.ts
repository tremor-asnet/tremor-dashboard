// Constants
import {
  DIRECTION,
  INVOICE_REGEX,
  ORDER_LIST_REGEX,
  PRODUCT_LIST_REGEX,
} from "@/constants";

// Types
import { Order } from "@/types";

export const isBrowser = typeof window !== "undefined";

export const isEmpty = (value: any) => {
  // check if the value is an object
  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  } else {
    // return true if the value is falsy, false otherwise
    return !value;
  }
};

export const getErrorMessage = (statusCode: number, statusText: string) => {
  const errorMessage = `An error has occurred: ${statusCode} - ${statusText}`;
  return errorMessage;
};

export const getObjectValue = <T, Key extends keyof T>(obj: T, key: string) => {
  return obj[key as Key] as string;
};

export const getCrumbName = ({
  name,
  path,
  params,
}: {
  name: string;
  path: string;
  params?: string | string[];
}) => {
  if (ORDER_LIST_REGEX.test(path)) {
    return `${params && "#" + params}`;
  } else if (PRODUCT_LIST_REGEX.test(path)) {
    return `${params && "#" + params}`;
  } else {
    return name.replace("-", " ");
  }
};

/**
 * Filter data by value
 * @param data []
 * @param field string
 * @param value string
 * @returns []
 */
export const searchProductDataByValue = <T>(
  data: T[],
  field: string,
  value: string,
) =>
  data.filter(
    item =>
      getObjectValue(item, field)?.toLowerCase().includes(value.toLowerCase()),
  );

/**
 * Search Order data by value
 * @param data []
 * @param fieldOuter string
 * @param fieldInner string
 * @param value string
 * @returns []
 */
export const searchOrderDataByValue = <T, Y>(
  data: T[],
  fieldOuter: string,
  fieldInner: string,
  value: string,
) =>
  data.filter(
    item =>
      (getObjectValue(item, fieldOuter) as unknown as Y[])?.find(
        itemInner =>
          getObjectValue(itemInner, fieldInner)
            ?.toLowerCase()
            .includes((value as string).toLowerCase()),
      ),
  );

/**
 * Convert number to array
 * @param start number
 * @param end number
 * @returns [number]
 */
export const rangeNumber = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * Handle match path
 * @param path string
 * @returns
 */
export const handleMatchPath = (path: string) => {
  let orderMatch = path.match(ORDER_LIST_REGEX);
  let productMatch = path.match(PRODUCT_LIST_REGEX);
  let invoiceMatch = path.match(INVOICE_REGEX);

  switch (true) {
    case orderMatch !== null:
      return "Order Details";

    case productMatch !== null:
      return "Product Details";

    case invoiceMatch !== null:
      return "Invoice Details";

    default:
      return null;
  }
};

/**
 * Handle search params for API
 * @param object key: string, value: string
 * @returns string
 */
export const buildSearchUrl = (object: { [key: string]: string | number }) => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(object)) {
    searchParams.append(key, String(value));
  }

  return searchParams.toString();
};
