"use client";

import { createPortal } from "react-dom";
import React, { ElementRef, ReactNode, useRef, useState } from "react";

import { GrClose } from "react-icons/gr";
import { Button, Flex } from "@tremor/react";

import { twMerge } from "tailwind-merge";

interface IModal {
  title: string;
  children: ReactNode;
  additionalClasses?: string;
  showCloseIconBtn?: boolean;
  open?: boolean;
  btnCloseLabel?: string;
  btnPrimaryLabel?: string;
  btnSecondaryLabel?: string;
  onClose?: () => void;
  onPrimaryBtn?: () => void;
  onSecondaryBtn?: () => void;
}

export default function Modal({
  title,
  children,
  additionalClasses = "",
  open = true,
  showCloseIconBtn = false,
  btnCloseLabel = "Cancel",
  btnPrimaryLabel = "Submit",
  btnSecondaryLabel = "Done",

  onPrimaryBtn,
  onSecondaryBtn,
  onClose,
}: IModal) {
  const [isOpen, setOpen] = useState(open);
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const handleClose = () => {
    dialogRef.current?.close();
    setOpen(false);
    onClose?.();
  };

  const handlePrimary = () => {
    onPrimaryBtn?.();
    handleClose();
  };

  const handleSecondary = () => {
    onSecondaryBtn?.();
    handleClose();
  };

  isOpen &&
    createPortal(
      <Flex
        className="absolute inset-0 z-[1000] bg-backdrop"
        justifyContent="center"
        alignItems="center">
        <dialog
          ref={dialogRef}
          onClose={handleClose}
          open={isOpen}
          className={twMerge(
            "py-5 px-4 rounded-md border-none outline-none flex flex-col gap-5 sm:min-w-[80%] md:min-w-[500px] bg-tremor-primary dark:bg-dark-tremor-primary",
            additionalClasses,
          )}>
          <h2 className="font-bold text-2xl text-center text-tertiary dark:text-dark-romance">
            {title}
          </h2>

          {showCloseIconBtn && (
            <Button
              type="button"
              variant="light"
              onClick={handleClose}
              className="absolute top-5 right-5 ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 outline-none border-none rounded-full focus:ring-2 focus:ring-gray-300 p-3 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              aria-label="Close">
              <GrClose className="h-5 w-5 shrink-0 text-xl text-tertiary dark:text-white" />
            </Button>
          )}

          {children}

          <Flex className="gap-5">
            {onPrimaryBtn && (
              <Button
                onClick={handlePrimary}
                className={twMerge(
                  "bg-green-500 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 text-white dark:text-white outline-none border-none px-6 py-4 text-xl font-bold flex-1",
                )}>
                {btnPrimaryLabel}
              </Button>
            )}

            {onSecondaryBtn && (
              <Button
                onClick={handleSecondary}
                className={twMerge(
                  "text-white dark:text-white outline-none border-none px-6 py-4 text-xl font-bold flex-1",
                )}>
                {btnSecondaryLabel}
              </Button>
            )}

            <Button
              onClick={handleClose}
              className={twMerge(
                "bg-orange-500 dark:bg-orange-500 hover:bg-orange-500 dark:hover:bg-orange-500 text-white dark:text-white outline-none border-none px-6 py-4 text-xl font-bold flex-1",
              )}>
              {btnCloseLabel}
            </Button>
          </Flex>
        </dialog>
      </Flex>,
      document.getElementById("modal-root")!,
    );
}
