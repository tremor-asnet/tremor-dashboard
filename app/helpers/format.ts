/**
 * Format money ("23900" --> "$23,900")
 * @param number string
 * @returns string
 */
export const formatMoney = (number: string): string =>
  `$${parseFloat(number).toLocaleString("en-US")}`;

/**
 * Format percentage
 * @param number string
 * @returns string
 */
export const formatPercentage = (number: number): string =>
  number <= 0 ? `${number}%` : `+${number}%`;

/**
 * Format abbreviate number
 * Ex: 34000 --> 34k
 * @param number number
 * @returns string
 */
export const formatAbbreviateNumber = (number: number): string => {
  return number < 1e3
    ? number.toString()
    : number < 1e6
      ? Math.floor(number / 1e3) + "k"
      : Math.floor(number / 1e6) + "m";
};

/**
 * Format decimal number
 * Ex: 23999 --> 23.999
 * @param value number
 * @returns string
 */
export const formatDecimalNumber = (
  value: number,
  currency?: string,
): string => {
  const formattedNumber = value.toLocaleString("en-US").split(",").join(".");

  if (currency) {
    return `${currency}${formattedNumber}`;
  }

  return formattedNumber;
};

/**
 * Format integer number
 * Ex:
 * 15222 --> 15,222
 * 15222 --> $15,222
 * @param value number
 * @returns string
 */
export const formatIntegerNumber = (
  value: number,
  currency?: string,
): string => {
  const formattedNumber = value.toLocaleString("en-US");

  if (currency) {
    return `${currency}${formattedNumber}`;
  }

  return formattedNumber;
};

/**
 * Format number by decimal currency ( 23000 --> $23.000 )
 * Format number by commas currency ( 23000 --> $23,000 )
 * Format number with commas ( 23000 --> 23,000 )
 * Format number with decimal ( 23000 --> 23.000 )
 * @param value number
 * @param isDecimalNumber boolean
 * @param currency string
 * @returns string
 */
export const formattedNumber = (
  value: number,
  isDecimalNumber: boolean,
  currency?: string,
): string => {
  let formattedNumber = value.toLocaleString("en-US");

  if (isDecimalNumber) {
    formattedNumber = formattedNumber.split(",").join(".");
  }

  return currency ? `${currency}${formattedNumber}` : formattedNumber;
};
