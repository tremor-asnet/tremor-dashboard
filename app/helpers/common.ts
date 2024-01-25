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
    if (path.includes(`/order-list/${name}`))
      return `Order Details ${params && "#" + params}`;

    if (path.includes(`/product-list/${name}`))
      return `Product Details ${params && "#" + params}`;
  }

  return name;
};
