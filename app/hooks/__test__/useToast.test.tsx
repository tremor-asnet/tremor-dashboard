import { renderHook } from "@testing-library/react";
import { TOAST_TYPE, ToastContext } from "@/context/toast";
import { useToast } from "../useToast";

// Mock context value
const mockToastContextValue: {
  openToast: ({
    type,
    message,
    icon,
  }: {
    type?: TOAST_TYPE;
    message?: string;
    icon?: JSX.Element;
  }) => void;
  closeToast: () => void;
} = {
  openToast: jest.fn(),
  closeToast: jest.fn(),
};

// Mock context provider
const MockToastContextProvider: React.FC = ({ children }: any) => {
  return (
    <ToastContext.Provider value={mockToastContextValue}>
      {children}
    </ToastContext.Provider>
  );
};

describe("useToast", () => {
  test("should return toast context value", () => {
    const { result } = renderHook(() => useToast(), {
      wrapper: MockToastContextProvider,
    });

    expect(result.current).toEqual(mockToastContextValue);
  });
});
