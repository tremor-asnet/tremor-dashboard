import { IoClose } from "react-icons/io5";
import { Button } from "@tremor/react";

// Constants
import { VARIANT_BUTTON } from "@/constants";

export type ToastColor = "green" | "red" | "yellow";

interface ToastProps {
  Icon: JSX.ElementType;
  message: string;
  onClose?: () => void;
  color?: string | ToastColor;
}

const Toast = ({ Icon, message, color = "green", onClose }: ToastProps) => {
  return (
    <div
      className="fixed right-5 top-5 flex items-center w-full max-w-xs p-4 mb-4 z-40 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
      data-testid="toast">
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-${color}-500 bg-${color}-100 rounded-lg dark:bg-${color}-800 dark:text-${color}-200`}>
        <Icon />
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <Button
        type="button"
        variant={VARIANT_BUTTON.LIGHT}
        onClick={onClose}
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        aria-label="Close">
        <IoClose />
      </Button>
    </div>
  );
};

export default Toast;
