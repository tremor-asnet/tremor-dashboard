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
 * Format adjust increase or decrease number
 * Ex: 91 --> +91, 55 --> -55%, 312 --> +$312
 * @param number string
 * @returns string
 */
export const formatAdjustNumber = ({
  value,
  isPositive = 0,
  currency = "",
  unit = "",
}: {
  value: number;
  isPositive?: number;
  currency?: string;
  unit?: string;
}): string => {
  if (value === 0) return "";

  const sign = isPositive === 0 ? "+" : "-";

  return `${sign}${currency}${value?.toLocaleString("en-US")}${unit}`;
};

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
  delimiter = "",
}: {
  value: number;
  currency?: string;
  isDecimalNumber?: boolean;
  delimiter?: string;
}): string => {
  let formattedNumber = value?.toLocaleString("en-US");

  if (isDecimalNumber) {
    formattedNumber = formattedNumber.split(",").join(",");
  }

  return currency
    ? `${currency}${delimiter}${formattedNumber}`
    : formattedNumber;
};

export const moneyFormat = ({
  value,
  currency = "",
  delimiter = "",
  positionFraction = 2,
}: {
  value: number;
  currency?: string;
  delimiter?: string;
  positionFraction?: number;
}): string => {
  let formattedNumber = value?.toLocaleString("en-US", {
    minimumFractionDigits: positionFraction,
  });

  return currency
    ? `${currency}${delimiter}${formattedNumber}`
    : formattedNumber;
};
