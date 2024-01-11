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
  throw new Error(errorMessage);
};
