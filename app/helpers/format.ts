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
