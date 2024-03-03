"use client";

import { ReactNode, createContext, useState } from "react";

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// Constants
import { EDIT_PRODUCT_MESSAGE, TOAST_TYPES } from "@/constants";

// Types
import { ToastColor } from "@/ui/components/Toast/Toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastType {
  icon: ReactNode;
  message: string;
  color: ToastColor;
}

interface ToastProps {
  isOpen: boolean;
  toastType: ToastType;
}

interface ToastContextProps {
  isOpen: boolean;
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
  isOpen: true,
  toastType: { icon: "", message: "", color: "green" },
  openToast: ({ isOpen, toastType }: ToastProps) => {},
  closeToast: () => {},
});

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps>({
    isOpen: true,
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

  const openToast = ({ isOpen, toastType }: ToastProps) => {
    const { icon, message, color } = toastType;

    setToast({ isOpen, toastType: { icon, message, color } });

    setTimeout(() => {
      setToast({
        isOpen: false,
        toastType: {
          message: "",
          icon: null,
          color: "green",
        },
      });
    }, 3000);
  };

  const value = {
    isOpen,
    toastType: { icon, message, color },
    openToast,
    closeToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
