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

export const formatNewDate = (value: string, separator: string = "") =>
  dayjs(value).format(`MMMM${separator} DD${separator} YYYY`);

export const formatNewDate3 = (value: string) =>
  dayjs(value).format("MM/DD/YYYY");
