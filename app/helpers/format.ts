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
export const formatPercentage = (number: string): string => {
  const parsedNumber = parseFloat(number);

  return parsedNumber <= 0 ? `${number}%` : `+${number}%`;
};

/**
 * Format abbreviate number
 * @param number number
 * @returns string
 */
export const formatAbbreviateNumber = (number: number): string => {
  return number < 1e3
    ? number.toString()
    : number < 1e6
      ? Math.floor(number / 1e3) + "K"
      : Math.floor(number / 1e6) + "M";
};
