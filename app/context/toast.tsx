"use client";

import { ReactNode, createContext, useState } from "react";

// Icons
import { FaCheckCircle } from "react-icons/fa";

interface ToastProviderProps {
  children: React.ReactNode;
}

interface ToastProps {
  isOpen: boolean;
  icon: ReactNode;
  message: string;
  color?: "green" | "red" | "yellow";
}

interface ToastContextProps {
  isOpen: boolean;
  icon: ReactNode;
  message: string;
  color?: "green" | "red" | "yellow";
  openToast: ({ isOpen, icon, message, color }: ToastProps) => void;
}

const ToastContext = createContext<ToastContextProps>({
  isOpen: false,
  icon: <FaCheckCircle />,
  message: "",
  color: "green",
  openToast: ({ isOpen, icon, message, color }: ToastProps) => {},
});

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastProps>({
    isOpen: false,
    icon: <FaCheckCircle />,
    message: "",
    color: "green",
  });
  const { isOpen, icon, message, color } = toast;

  const openToast = ({ isOpen, icon, message, color }: ToastProps) => {
    setToast({ isOpen, icon, message, color });

    setTimeout(() => {
      setToast({
        isOpen: false,
        message: "",
        icon: null,
        color: "green",
      });
    }, 3000);
  };

  const value = {
    isOpen,
    icon,
    message,
    color,
    openToast,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export { ToastProvider, ToastContext };
