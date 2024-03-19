"use client";

import React, {
  ElementRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { RiCloseLine } from "@remixicon/react";

import { twMerge } from "tailwind-merge";
import { Button, Flex } from "@tremor/react";

type ModalAction = {
  label: string;
  type?: "cancel" | "confirm" | "custom";
  onClick?: () => void;
  className: string;
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
          "py-5 px-4 rounded-md flex flex-col gap-5",
          className,
        )}>
        <h2 className="font-bold text-2xl text-center text-tertiary">
          {title}
        </h2>

        {showCloseButton && (
          <button
            className="absolute top-5 right-5 border-none outline-none rounded-full p-2 hover:bg-blackAlpha"
            aria-label="Close Button"
            onClick={handleDismiss}>
            <RiCloseLine className="h-5 w-5 shrink-0" />
          </button>
        )}

        {children}

        <Flex className="gap-5">
          {actions.map(
            (
              { label, className: style, onClick, type = "custom", ...others },
              index,
            ) => {
              const handleClick =
                type === "cancel"
                  ? handleDismiss
                  : type === "confirm"
                    ? onConfirm
                    : onClick;

              return (
                <Button
                  key={index}
                  onClick={handleClick}
                  className={twMerge(
                    "outline-none border-none px-6 py-4 text-xl hover:opacity-70 font-bold flex-1",
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
