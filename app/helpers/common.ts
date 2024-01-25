import { ROUTES } from "@/constants";

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

export const getObjectValue = <T, Key extends keyof T>(
  obj: T,
  key: Key,
): T[Key] => {
  return obj[key];
};

export const getCrumbName = ({
  name,
  path,
  params,
}: {
  name: string;
  path?: string;
  params?: string | string[];
}) => {
  if (path && params) {
    if (path.includes(`${ROUTES.ORDER_LIST}/`))
      return `Order Details ${params && "#" + params}`;

    if (path.includes(`${ROUTES.PRODUCT_LIST}/`))
      return `Product Details ${params && "#" + params}`;
  }

  return name;
};
