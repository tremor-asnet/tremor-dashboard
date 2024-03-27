import { CURRENCY_AMOUNT, SEPARATOR } from "@/constants";

export const isNaNFormat = (value: string) =>
  isNaN(+value.replaceAll(SEPARATOR.COMMAS, ""));

export const formatAmountNumber = (value: string): string => {
  if (!value) {
    return value;
  }

  const dotIndex = value.indexOf(SEPARATOR.DOTS);

  const hasDot = dotIndex > -1;

  const newValue = hasDot
    ? value.slice(0, dotIndex).replaceAll(SEPARATOR.COMMAS, "")
    : value.replaceAll(SEPARATOR.COMMAS, "");

  const numberFormat: Intl.NumberFormat = new Intl.NumberFormat(
    CURRENCY_AMOUNT.LOCALES,
    {
      style: CURRENCY_AMOUNT.STYLE,
      minimumFractionDigits: hasDot ? 2 : 0,
      maximumFractionDigits: hasDot ? 2 : 0,
      useGrouping: true,
    },
  );

  return numberFormat.format(parseFloat(newValue));
};
