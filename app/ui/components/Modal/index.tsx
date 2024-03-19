"use client";

import React, {
  ElementRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { twMerge } from "tailwind-merge";

import { Button, Flex } from "@tremor/react";
import { GrClose } from "react-icons/gr";

import { ModalActions } from "@/types";

type ModalAction = {
  label: string;
  type?: ModalActions;
  onClick?: () => void;
  className?: string;
};

interface IModal {
  title: string;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
  actions?: ModalAction[];
  onClose?: () => void;
  open?: boolean;
  onConfirm?: () => void;
}

const styleActions: { [key in ModalActions]?: string } = {
  [ModalActions.confirm]:
    "bg-green-500 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-500",
  [ModalActions.cancel]:
    "bg-orange-500 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500",
};

export default function Modal({
  title,
  children,
  actions = [],
  className,
  showCloseButton,
  onClose,
  open = true,
  onConfirm,
}: IModal) {
  const [isOpen, setOpen] = useState(open);
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      setOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    dialogRef.current?.close();
    setOpen(false);
    onClose?.();
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Flex
      className="absolute inset-0 z-[1000] bg-backdrop"
      justifyContent="center"
      alignItems="center">
      <dialog
        ref={dialogRef}
        onClose={handleDismiss}
        className={twMerge(
          "py-5 px-4 rounded-md border-none outline-none flex flex-col gap-5 sm:min-w-[80%] md:min-w-[500px] bg-tremor-primary dark:bg-dark-tremor-primary",
          className,
        )}>
        <h2 className="font-bold text-2xl text-center text-tertiary dark:text-dark-romance">
          {title}
        </h2>

        {showCloseButton && (
          <Button
            type="button"
            variant="light"
            onClick={handleDismiss}
            className="absolute top-5 right-5 ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 outline-none border-none rounded-full focus:ring-2 focus:ring-gray-300 p-3 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close">
            <GrClose className="h-5 w-5 shrink-0 text-xl text-tertiary dark:text-white" />
          </Button>
        )}

        {children}

        <Flex className="gap-5">
          {actions.map(
            (
              {
                label,
                className: style,
                onClick,
                type = ModalActions.custom,
                ...others
              },
              index,
            ) => {
              const handleClick =
                type === ModalActions.cancel
                  ? handleDismiss
                  : type === ModalActions.confirm
                    ? onConfirm
                    : onClick;

              return (
                <Button
                  key={index}
                  onClick={handleClick}
                  className={twMerge(
                    "text-white dark:text-white outline-none border-none px-6 py-4 text-xl font-bold flex-1",
                    styleActions[type] || "",
                    style,
                  )}
                  {...others}>
                  {label}
                </Button>
              );
            },
          )}
        </Flex>
      </dialog>
    </Flex>,
    document.getElementById("modal-root")!,
  );
}
