import { ReactNode } from "react";
import { renderHook } from "@testing-library/react";
import { ToastContext } from "@/context/toast";
import { useToast } from "../useToast";
import { ToastColor } from "@/ui/components/Toast/Toast";

// Mock context value
const mockToastContextValue: {
  isOpen?: boolean;
  toastType: {
    icon: ReactNode;
    message: string;
    color: ToastColor;
  };
  openToast: ({
    isOpen,
    toastType,
  }: {
    isOpen?: boolean;
    toastType: {
      icon: ReactNode;
      message: string;
      color: ToastColor;
    };
  }) => void;
  closeToast: () => void;
} = {
  isOpen: false,
  toastType: { icon: null, message: "", color: "green" },
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
