/**
 * Format money ("23900" --> "$23,900")
 * @param number string
 * @returns string
 */
export const formatMoney = (number: string): string => {
  return "$" + parseFloat(number).toLocaleString("en-US");
};

/**
 * Format positive percentage ("3" --> "+3%")
 * @param number string
 * @returns string
 */
export const formatPositivePercentage = (number: string): string =>
  `+${number}%`;

/**
 * Format percentage ("23.9" --> "23.9%")
 * @param number string
 * @returns string
 */
export const formatPercentage = (number: string): string => `${number}%`;
