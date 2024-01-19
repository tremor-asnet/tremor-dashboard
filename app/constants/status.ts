type StatusType = {
  [key: number]: string;
  0: string;
  1: string;
  2: string;
};

export const STATUS_TEXT: StatusType = {
  0: "Paid",
  1: "Canceled",
  2: "Refunded",
};
