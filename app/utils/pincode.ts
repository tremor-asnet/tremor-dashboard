import { DEFAULT_PIN_CODE, PIN_CODE_LENGTH } from "@/constants";

function formatPinCode({
  codes = "",
  index = 0,
  length = PIN_CODE_LENGTH,
  value = "",
}: {
  codes?: string;
  value?: string;
  length?: number;
  index?: number;
}) {
  let format = Array(length).fill(DEFAULT_PIN_CODE).join("");

  let currentLen = codes.length;

  if (currentLen != length) {
    for (let i = 0; i < currentLen; i++) {
      format = format.substring(0, i) + codes[i] + format.substring(i + 1);
    }
  } else {
    format = codes;
  }

  if (value) {
    format = format.substring(0, index) + value + format.substring(index + 1);
  }

  return format;
}

function isValidPinCode(codes: string, length: number) {
  return codes.length === length && !codes.includes(DEFAULT_PIN_CODE);
}

export { formatPinCode, isValidPinCode };
