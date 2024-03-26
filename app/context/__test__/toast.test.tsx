import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { ToastProvider, ToastContext, TOAST_TYPE } from "../toast";

jest.mock("../toast", () => {
  const originalModule = jest.requireActual("../toast");
  return {
    ...originalModule,
    buildToastRenderer: jest.fn(),
  };
});

describe("ToastProvider", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  const renderComponent = ({
    toastType,
    message,
  }: {
    toastType?: TOAST_TYPE;
    message?: string;
  }) =>
    render(
      <ToastProvider>
        <ToastContext.Consumer>
          {({ openToast }) => (
            <button
              onClick={() => openToast({ type: toastType, message: message })}>
              Trigger Toast
            </button>
          )}
        </ToastContext.Consumer>
      </ToastProvider>,
    );

  const checkToastMessage = async ({
    toastType,
    message,
  }: {
    toastType?: TOAST_TYPE;
    message: string;
  }) => {
    const { getByText } = renderComponent({
      toastType: toastType,
    });

    fireEvent.click(getByText("Trigger Toast"));
    expect(getByText(message)).toBeInTheDocument;
  };

  it("Displays default toast when triggered", async () => {
    await checkToastMessage({ message: "Success!" });
  });

  it("Displays toast success when triggered", async () => {
    await checkToastMessage({
      toastType: TOAST_TYPE.SUCCESS,
      message: "Success!",
    });
  });

  it("Displays toast warning with default message when triggered", async () => {
    await checkToastMessage({
      toastType: TOAST_TYPE.WARNING,
      message: "Warning!",
    });
  });

  it("Displays toast error with default message when triggered", async () => {
    await checkToastMessage({ toastType: TOAST_TYPE.ERROR, message: "Error!" });
  });

  it("Closes toast after a certain duration", async () => {
    const { getByText, queryByText } = renderComponent({
      toastType: TOAST_TYPE.SUCCESS,
      message: "Edit product successfully",
    });
    fireEvent.click(getByText("Trigger Toast"));

    jest.advanceTimersByTime(3000);
    await waitFor(() => {
      expect(queryByText("Edit product successfully")).not.toBeInTheDocument;
    });
  });
});
