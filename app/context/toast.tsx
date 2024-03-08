"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// Constants
import { EDIT_PRODUCT_MESSAGE, TOAST_TYPES } from "@/constants";

// Types
import Toast, { ToastColor } from "@/ui/components/Toast/Toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastType {
  icon: ReactNode;
  message: string;
  color: ToastColor;
}

interface ToastProps {
  isOpen?: boolean;
  toastType: ToastType;
}

interface ToastContextProps {
  isOpen?: boolean;
  toastType: ToastType;
  openToast: ({ isOpen, toastType }: ToastProps) => void;
  closeToast: () => void;
}

export const ToastMessageType = (type: string): ToastType => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      return {
        icon: <FaCheckCircle />,
        message: EDIT_PRODUCT_MESSAGE.SUCCESS,
        color: "green",
      };

    case TOAST_TYPES.WARNING:
      return {
        icon: <TbExclamationMark />,
        message: EDIT_PRODUCT_MESSAGE.PENDING,
        color: "yellow",
      };

    case TOAST_TYPES.ERROR:
      return {
        icon: RxCross2,
        message: EDIT_PRODUCT_MESSAGE.FAILED,
        color: "red",
      };

    default:
      return {
        icon: <FaCheckCircle />,
        message: "",
        color: "green",
      };
  }
};

const ToastContext = createContext<ToastContextProps>({
  toastType: { icon: "", message: "", color: "green" },
  openToast: ({ isOpen, toastType }: ToastProps) => {},
  closeToast: () => {},
});

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps>({
    isOpen: false,
    toastType: {
      icon: <FaCheckCircle />,
      message: "",
      color: "green",
    },
  });

  const {
    isOpen,
    toastType: { icon, message, color },
  } = toast;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isOpen) {
      timeout = setTimeout(() => {
        closeToast();
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen]);

  const closeToast = () => {
    setToast({
      isOpen: false,
      toastType: {
        message: "",
        icon: null,
        color: "green",
      },
    });
  };

  const openToast = ({ toastType }: ToastProps) => {
    const { icon, message, color } = toastType;

    setToast({ isOpen: false, toastType: { icon, message, color } });
    setTimeout(() =>
      setToast({ isOpen: true, toastType: { icon, message, color } }),
    );
  };

  const value = {
    isOpen,
    toastType: { icon, message, color },
    openToast,
    closeToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast.isOpen && (
        <Toast
          icon={icon}
          message={message}
          color={color}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
