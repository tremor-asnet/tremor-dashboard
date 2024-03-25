import { CURRENCY } from "@/constants";
import {
  formatAbbreviateNumber,
  formatMoney,
  formatPercentage,
  getErrorMessage,
  isEmpty,
  formattedNumber,
  formatDateTime,
  formatDateTimeForTransaction,
  getCrumbName,
  searchOrderDataByValue,
  searchProductDataByValue,
  buildSearchUrl,
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

describe("formattedNumber function", () => {
  test("formats number with decimal currency", () => {
    const result = formattedNumber({
      value: 23000,
      currency: CURRENCY.DOLLAR,
      isDecimalNumber: true,
    });
    expect(result).toBe("$23,000");
  });

  test("formats number with commas currency", () => {
    const result = formattedNumber({
      value: 23000,
      currency: CURRENCY.DOLLAR,
      isDecimalNumber: false,
    });
    expect(result).toBe("$23,000");
  });

  test("formats number with commas", () => {
    const result = formattedNumber({ value: 23000, isDecimalNumber: false });
    expect(result).toBe("23,000");
  });

  test("formats number with decimal", () => {
    const result = formattedNumber({ value: 23000, isDecimalNumber: true });
    expect(result).toBe("23,000");
  });

  test("formats number without currency and decimal", () => {
    const result = formattedNumber({ value: 23000 });
    expect(result).toBe("23,000");
  });
});

describe("formatDateTime function", () => {
  it("should format date and time without separator", () => {
    const dateValue = "2022-01-23T12:34:56";
    const formattedDate = formatDateTime(dateValue);
    expect(formattedDate).toBe("23 Jan 12:34 PM");
  });

  it("should format date and time with a separator", () => {
    const dateValue = "2022-01-23T12:34:56";
    const separator = ",";
    const formattedDate = formatDateTime(dateValue, separator);
    expect(formattedDate).toBe("23 Jan, 12:34 PM");
  });
});

describe("formatDateTimeForTransaction function", () => {
  it("should format date and time", () => {
    const dateValue = "2024-02-05T02:50:02.319095+00:00";
    const formattedDate = formatDateTimeForTransaction(dateValue);
    expect(formattedDate).toBe("05 Feb 2024, at 09:50 AM");
  });
});

describe("getPageTitle function", () => {
  test("Should render Order Details with id", () => {
    const mockValue = {
      name: "1234",
      path: "/order-list/1234",
      params: "1234",
    };
    const name = getCrumbName({ ...mockValue });
    expect(name).toBe("#" + "1234");
  });

  test("Should render Product Details with id", () => {
    const mockValue = {
      name: "1234",
      path: "/product-list/1234",
      params: "1234",
    };
    const name = getCrumbName({ ...mockValue });
    expect(name).toBe("#" + "1234");
  });

  test("Should render correct name", () => {
    const mockValue = {
      name: "Test",
      path: "/test",
    };
    const name = getCrumbName({ ...mockValue });
    expect(name).toBe("Test");
  });
});

describe("searchOrderDataByValue function", () => {
  test("filters data correctly", () => {
    const orderListData = [
      {
        products: [{ name: "ProductA" }, { name: "ProductB" }],
      },
      {
        products: [{ name: "ProductC" }, { name: "ProductD" }],
      },
    ];

    const productName = "ProductA";

    const filteredData = searchOrderDataByValue(
      orderListData,
      "products",
      "name",
      productName,
    );

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0].products[0].name).toBe(productName);
  });
});

describe("searchProductDataByValue function", () => {
  const productListData = [
    { productName: "ProductA" },
    { productName: "ProductB" },
    { productName: "ProductC" },
  ];

  test("filters data correctly", () => {
    const result = searchProductDataByValue(
      productListData,
      "productName",
      "ProductA",
    );

    expect(result.length).toBe(1);
    expect(result[0].productName).toBe("ProductA");
  });
});

describe("buildSearchUrl function", () => {
  const mockObject = {
    page: 0,
    size: 10,
    query: "",
  };

  test("build correctly params", () => {
    const result = buildSearchUrl(mockObject);

    expect(result).toBe("page=0&size=10&query=");
  });
});
