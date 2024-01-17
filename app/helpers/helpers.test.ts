import {
  formatAbbreviateNumber,
  formatMoney,
  formatPercentage,
  getErrorMessage,
  isEmpty,
} from ".";

describe("Test isEmpty function", () => {
  test("Check the param with empty value", () => {
    // Empty string
    let result = isEmpty("");
    expect(result).toBeTruthy();

    // Empty array
    result = isEmpty([]);
    expect(result).toBeTruthy();

    // Empty object
    result = isEmpty({});
    expect(result).toBeTruthy();

    // With null
    result = isEmpty(null);
    expect(result).toBeTruthy();

    // With undefined
    result = isEmpty(undefined);
    expect(result).toBeTruthy();
  });

  test("Check the param with value", () => {
    let result = isEmpty("test value");
    expect(result).toBeFalsy();

    // With array
    result = isEmpty(["123"]);
    expect(result).toBeFalsy();

    // With object
    result = isEmpty({ a: "b" });
    expect(result).toBeFalsy();
  });
});

describe("Test getErrorMessage function", () => {
  test("Should render correct message", () => {
    const result = getErrorMessage(404, "Not Found");
    expect(result).toBe("An error has occurred: 404 - Not Found");
  });
});

describe("Test formatMoney function", () => {
  test("formatMoney formats number correctly", () => {
    const formattedMoney = formatMoney("23900");
    expect(formattedMoney).toBe("$23,900");
  });

  test("formatMoney handles invalid input gracefully", () => {
    const formattedMoney = formatMoney("invalidNumber");
    expect(formattedMoney).toBe("$NaN");
  });
});

describe("Test formatPercentage function", () => {
  test("formatMoney formats number correctly", () => {
    const formattedMoney = formatMoney("23900");
    expect(formattedMoney).toBe("$23,900");
  });

  test("formatMoney handles invalid input gracefully", () => {
    const formattedMoney = formatMoney("invalidNumber");
    expect(formattedMoney).toBe("$NaN");
  });
});

describe("Test formatPercentage function", () => {
  test("formats positive numbers with a plus sign and percentage", () => {
    const positiveNumber = 42;
    const formattedResult = formatPercentage(positiveNumber);

    expect(formattedResult).toBe("+42%");
  });

  test("formats negative numbers with a minus sign and percentage", () => {
    const negativeNumber = -15.5;
    const formattedResult = formatPercentage(negativeNumber);

    expect(formattedResult).toBe("-15.5%");
  });

  test("formats zero with a plus sign and percentage", () => {
    const zero = 0;
    const formattedResult = formatPercentage(zero);

    expect(formattedResult).toBe("0%");
  });
});

describe("formatAbbreviateNumber function", () => {
  test("formatAbbreviateNumber correctly formats numbers", () => {
    // Test case: number < 1e3
    expect(formatAbbreviateNumber(500)).toBe("500");

    // Test case: 1e3 <= number < 1e6
    expect(formatAbbreviateNumber(1500)).toBe("1k");
    expect(formatAbbreviateNumber(999999)).toBe("999k");

    // Test case: number >= 1e6
    expect(formatAbbreviateNumber(1000000)).toBe("1m");
    expect(formatAbbreviateNumber(1500000)).toBe("1m");
  });
});
