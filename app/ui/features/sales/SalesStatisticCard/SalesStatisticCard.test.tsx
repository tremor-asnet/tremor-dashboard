import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

// Components
import SalesStatisticCard from "./SalesStatisticCard";

// Constants
import { SALES_STATISTIC_TYPE } from "@/constants";

describe("SalesStatisticCard", () => {
  const statisticsData = {
    id: "1",
    type: "Sales",
    amount: 23220,
    amountChange: 213,
    duration: "since last month",
    amountChangeType: 0,
  };

  it("Should match snapshot", () => {
    const component = render(
      <SalesStatisticCard statisticsData={statisticsData} />,
    );
    expect(component).toMatchSnapshot();
  });

  it("calls handleToggleAction function to toggles sales date options", () => {
    render(<SalesStatisticCard statisticsData={statisticsData} />);

    expect(screen.queryByTestId("sales-date-options")).toBeNull();

    // Click on the sales date text to open the options
    fireEvent.click(screen.getByText("6 May - 7 May"));

    expect(screen.queryByTestId("sales-date-options")).toBeTruthy();

    // Click again to close the options
    fireEvent.click(screen.getByText("6 May - 7 May"));

    expect(screen.queryByTestId("sales-date-options")).toBeNull();
  });

  it("calls handleSelectSalesDate function to selects sales date", () => {
    // Mock the useState hook
    const useStateSpy = jest.spyOn(React, "useState");

    // Mock for isOpenAction
    useStateSpy.mockReturnValueOnce([true, jest.fn()]);
    // Mock for currentSalesDate
    useStateSpy.mockReturnValueOnce(["6 May - 7 May", jest.fn()]);

    const { getByTestId } = render(
      <SalesStatisticCard statisticsData={statisticsData} />,
    );

    const button = getByTestId("sales-date-options").querySelector("button")!;

    fireEvent.click(button, { target: { label: "Last 7 days" } });

    expect(useStateSpy).toHaveBeenCalledWith(false);
    expect(useStateSpy).toHaveBeenCalledWith("6 May - 7 May");
  });

  it("renders correct totalAmountColor for AVG_REVENUE type", () => {
    const { getByTestId } = render(
      <SalesStatisticCard
        statisticsData={{
          ...statisticsData,
          type: SALES_STATISTIC_TYPE.AVG_REVENUE,
        }}
      />,
    );

    const totalAmountElement = getByTestId("total-amount");

    expect(
      totalAmountElement.getAttribute("class")?.includes("text-secondary"),
    ).toBe(false);
    expect(
      totalAmountElement
        .getAttribute("class")
        ?.includes("dark:!text-secondary"),
    ).toBe(false);
  });

  test("renders with empty string formattedTotalAmount", () => {
    const { container } = render(
      <SalesStatisticCard
        statisticsData={{
          ...statisticsData,
          type: SALES_STATISTIC_TYPE.AVG_REVENUE,
        }}
      />,
    );

    const totalAmountElementFew = container.querySelector(".text-few");
    expect(totalAmountElementFew).toBeNull();
  });

  it("renders with empty string formattedAmount", () => {
    const statisticsData = {
      id: "1",
      type: "Sales",
      amount: 0,
      amountChange: 0,
      duration: "since last month",
      amountChangeType: 0,
    };

    const { getByTestId } = render(
      <SalesStatisticCard statisticsData={statisticsData} />,
    );

    const totalAmountElement = getByTestId("formatted-amount");

    expect(totalAmountElement.getAttribute("class")?.includes("")).toBe(true);
  });
});
