// Constants
import {
  INVOICE_REGEX,
  ORDER_LIST_REGEX,
  PRODUCT_LIST_REGEX,
} from "@/constants";
import { DIRECTION } from "@/constants/common";

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
    return `Order Details ${params && "#" + params}`;
  } else if (PRODUCT_LIST_REGEX.test(path)) {
    return `Product Details ${params && "#" + params}`;
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
 * Filter Order by IsAvailable
 * @param data []
 * @param field string
 * @param value string
 * @returns []
 */
export const filterOrderList = <T>(data: T[], field: string, value: string) =>
  data.filter(item => getObjectValue(item, field).toString() === value);

/**
 * Filter Product by IsAvailable
 * @param data []
 * @param field string
 * @param value string
 * @returns []
 */
export const filterProductList = <T>(
  data: T[],
  field: string,
  value: boolean,
) => data.filter(item => Boolean(getObjectValue(item, field)) === value);

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
 * Get sorted array
 * @param array []
 * @param key keyof T
 * @param orderBy string
 * @returns []
 */
export const sortArrayByKey = <T>(
  array: T[],
  key: keyof T,
  orderBy: string,
) => {
  // Define sort items
  const sortItemCallback = (a: T, b: T) => {
    const aValue = a[key];
    const bValue = b[key];

    return aValue > bValue ? 1 : -1;
  };

  // Call toSorted() if array is an array
  const arraySort = array.toSorted
    ? array.toSorted(sortItemCallback)
    : array.sort(sortItemCallback);

  if (orderBy === DIRECTION.DESC) {
    return arraySort.reverse();
  }

  return arraySort;
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
 * Field "Count" and "Customer" are currently inside the object
 * So move the field inside the object need to sort to the outside
 * @param sortedOrders []
 */
export const transformOrders = (sortedOrders: Order[]) => {
  return sortedOrders.map(item => {
    const { customer, products } = item;
    let countKey = 0;

    if (products?.length) {
      products.forEach(({ count }) => {
        countKey = countKey + count;
      });
    }

    return {
      ...item,
      count: countKey,
      customerName: customer.fullName || "",
    };
  });
};
