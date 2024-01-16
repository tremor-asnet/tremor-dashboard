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
