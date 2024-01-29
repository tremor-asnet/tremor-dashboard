import { ORDER_LIST_REGEX, PRODUCT_LIST_REGEX } from "@/constants";

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
