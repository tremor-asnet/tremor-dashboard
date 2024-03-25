import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { TOAST_TYPES } from "@/constants";
import { ToastProvider, ToastContext, ToastMessageType } from "../toast";

describe("ToastProvider", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  const renderComponent = (toastType: string) =>
    render(
      <ToastProvider>
        <ToastContext.Consumer>
          {({ openToast }) => (
            <button
              onClick={() =>
                openToast({ toastType: ToastMessageType(toastType) })
              }>
              Trigger Toast
            </button>
          )}
        </ToastContext.Consumer>
      </ToastProvider>,
    );

  const checkToastMessage = async (
    toastType: string,
    expectedMessage: string,
  ) => {
    const { getByText } = renderComponent(toastType);
    fireEvent.click(getByText("Trigger Toast"));

    await waitFor(() => {
      expect(getByText(expectedMessage)).toBeInTheDocument;
    });
  };

  it("displays toast success when triggered", async () => {
    await checkToastMessage(TOAST_TYPES.SUCCESS, "Edit product successfully");
  });

  it("displays toast warning when triggered", async () => {
    await checkToastMessage(TOAST_TYPES.WARNING, "Editing product");
  });

  it("displays toast error when triggered", async () => {
    await checkToastMessage(TOAST_TYPES.ERROR, "Failed to edit product");
  });

  it("displays toast default when triggered", async () => {
    await checkToastMessage("", "success");
  });

  it("closes toast after a certain duration", async () => {
    const { getByText, queryByText } = renderComponent(TOAST_TYPES.SUCCESS);
    fireEvent.click(getByText("Trigger Toast"));

    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(queryByText("Edit product successfully")).not.toBeInTheDocument;
    });
  });
});
