"use client";

import React, { createContext, useState } from "react";

// Components
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import Toast from "@/ui/components/Toast/Toast";

export enum TOAST_TYPE {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}
interface ToastProps {
  type?: TOAST_TYPE;
  message?: string;
  icon?: JSX.Element;
}

type ToastState = ToastProps & { isOpen: boolean };

interface ToastContextValue {
  openToast: (toastProps: ToastProps) => void;
  closeToast: () => void;
}

export const buildToastRenderer = ({ type, icon, message }: ToastProps) => {
  switch (type) {
    case TOAST_TYPE.WARNING:
      return {
        icon: icon || TbExclamationMark,
        message: message ?? "Warning!",
        color: "yellow",
      };

    case TOAST_TYPE.ERROR:
      return {
        icon: icon || RxCross2,
        message: message ?? "Error!",
        color: "red",
      };

    case TOAST_TYPE.SUCCESS:
    default:
      return {
        icon: icon || FaCheckCircle,
        message: message ?? "Success!",
        color: "green",
      };
  }
};

const ToastContext = createContext<ToastContextValue>({
  openToast: () => {},
  closeToast: () => {},
});

const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toast, setToast] = useState<ToastState>({
    isOpen: false,
    type: TOAST_TYPE.SUCCESS,
  });

  const closeToast = () => {
    setToast({
      ...toast,
      isOpen: false,
    });
  };

  const openToast = ({
    type = TOAST_TYPE.SUCCESS,
    message,
    icon,
  }: ToastProps) => {
    setToast({ isOpen: true, type, message, icon });

    setTimeout(() => {
      closeToast();
    }, 3000);
  };

  const toastRenderer = buildToastRenderer(toast);
  return (
    <ToastContext.Provider
      value={{
        openToast,
        closeToast,
      }}>
      {children}
      {toast.isOpen && (
        <Toast
          Icon={toastRenderer.icon}
          message={toastRenderer.message}
          color={toastRenderer.color}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
