import { formatPinCode } from "../pincode";

describe("Pin Code Tests", () => {
  it("Show return correctly format", () => {
    const result = formatPinCode({ length: 4 });

    expect(result).toEqual("****");
  });

  it("Show return correctly format", () => {
    const result = formatPinCode({ index: 1, length: 4, value: "9" });

    expect(result).toEqual("*9**");
  });

  it("Show return correctly format", () => {
    const result = formatPinCode({
      index: 1,
      length: 4,
      value: "9",
      codes: "1138",
    });

    expect(result).toEqual("1938");
  });

  it("Show return correctly format", () => {
    const result = formatPinCode({
      index: 3,
      length: 4,
      value: "9",
      codes: "118",
    });

    expect(result).toEqual("1189");
  });
});
