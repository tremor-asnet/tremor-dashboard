import { DEFAULT_CODE } from "@/constants";

function formatPinCode({
  codes = "",
  index = 0,
  length = 4,
  value = "",
}: {
  codes?: string;
  value?: string;
  length?: number;
  index?: number;
}) {
  let format = Array(length).fill(DEFAULT_CODE).join("");

  let currentLen = codes.length;

  if (currentLen != length) {
    for (let i = 0; i < currentLen; i++) {
      format = format.substring(0, i) + codes[i] + format.substring(i + 1);
    }
  } else {
    format = codes;
  }

  if (value) {
    format = format =
      format.substring(0, index) + value + format.substring(index + 1);
  }

  return format;
}

function isValidatePinCode(codes: string, length: number) {
  return codes.length === length && !codes.includes(DEFAULT_CODE);
}

export { formatPinCode, isValidatePinCode };
