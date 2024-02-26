import dayjs from "dayjs";

const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date: Date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.toLocaleDateString("en", { year: "2-digit" }),
  ].join(".");
};

/**
 * Format by date time
 * Ex: 2024-01-11T02:48:52Z --> 11 Jan 09:48 AM, 2024-01-11T02:48:52Z --> 11 Jan, 09:48 AM
 * @param value string
 * @param separator string
 * @returns string
 */

export const formatDateTime = (value: string, separator: string = "") =>
  dayjs(value).format(`DD MMM${separator} hh:mm A`);

/**
 * Format by date time for transaction list
 * Ex: 2024-02-05T02:50:02.319095+00:00 --> 05 Feb 2024, at 09:50 AM
 * @param value string
 * @returns string
 */
export const formatDateTimeForTransaction = (value: string) =>
  dayjs(value).format(`DD MMM YYYY, [at] hh:mm A`);

/**
 * Format by date time for billing invoice list
 * Ex: 2024-02-05T02:50:02.319095+00:00 --> February, 05, 2024
 * @param value string
 * @returns string
 */
export const formatNewDate = (value: string, separator: string = "") =>
  dayjs(value).format(`MMMM${separator} DD${separator} YYYY`);
