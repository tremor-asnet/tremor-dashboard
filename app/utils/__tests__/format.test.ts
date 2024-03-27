import { formatAmountNumber, isNaNFormat } from "@/utils";

describe("formatAmountNumber", () => {
  it("formats amount number correctly", () => {
    expect(formatAmountNumber("1,000,000")).toBe("1,000,000");
  });

  it("formats amount number is not correctly", () => {
    expect(formatAmountNumber("")).toBeFalsy();
  });

  it("The number of formats whose value after the dot is greater than 2 numbers", () => {
    expect(formatAmountNumber("123.4567")).toBe("123.00");
  });
});

describe("isNaNFormat", () => {
  it("value is number", () => {
    expect(isNaNFormat("1,234.00")).toBeFalsy();
  });

  it("value is string", () => {
    expect(isNaNFormat("abc")).toBeTruthy();
  });
});
