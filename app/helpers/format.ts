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
 * Format number with:
 * decimal currency ( 23000 --> $23.000 )
 * commas currency ( 23000 --> $23,000 )
 * commas ( 23000 --> 23,000 )
 * decimal ( 23000 --> 23.000 )
 * @param value number
 * @param isDecimalNumber boolean
 * @param currency string
 * @returns string
 */
export const formattedNumber = ({
  value,
  currency = "",
  isDecimalNumber = false,
}: {
  value: number;
  currency?: string;
  isDecimalNumber?: boolean;
}): string => {
  let formattedNumber = value.toLocaleString("en-US");

  if (isDecimalNumber) {
    formattedNumber = formattedNumber.split(",").join(".");
  }

  return currency ? `${currency}${formattedNumber}` : formattedNumber;
};
