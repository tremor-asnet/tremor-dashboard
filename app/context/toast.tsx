"use client";

import React, { ReactNode, createContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { EDIT_PRODUCT_MESSAGE, TOAST_TYPES } from "@/constants";
import Toast, { ToastColor } from "@/ui/components/Toast/Toast";

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
  openToast: (toastProps: ToastProps) => void;
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
        icon: <RxCross2 />,
        message: EDIT_PRODUCT_MESSAGE.FAILED,
        color: "red",
      };

    default:
      return {
        icon: <FaCheckCircle />,
        message: "success",
        color: "green",
      };
  }
};

const ToastContext = createContext<ToastContextProps>({
  toastType: { icon: <FaCheckCircle />, message: "success", color: "green" },
  openToast: () => {},
  closeToast: () => {},
});

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastProps>({
    isOpen: false,
    toastType: ToastMessageType(TOAST_TYPES.SUCCESS),
  });

  const closeToast = () => {
    setToast({
      isOpen: false,
      toastType: { icon: <FaCheckCircle />, message: "", color: "green" },
    });
  };

  const openToast = ({ toastType }: ToastProps) => {
    setToast({ isOpen: true, toastType });
    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  const {
    isOpen,
    toastType: { icon, message, color },
  } = toast;

  return (
    <ToastContext.Provider
      value={{
        isOpen,
        toastType: { icon, message, color },
        openToast,
        closeToast,
      }}>
      {children}
      {isOpen && (
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
