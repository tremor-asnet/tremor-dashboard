"use client";

import { ReactNode, useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";

// Tremor
import { Button, Flex, Dialog, DialogPanel } from "@tremor/react";

// Tailwind
import { twMerge } from "tailwind-merge";

export interface IModal {
  title: string;
  children: ReactNode;
  open?: boolean;
  showCloseIconBtn?: boolean;
  additionalClasses?: string;
  btnCloseLabel?: string;
  btnPrimaryLabel?: string;
  btnSecondaryLabel?: string;
  onClose?: () => void;
  onClickPrimaryBtn?: () => void | Promise<void>;
  onClickSecondaryBtn?: () => void | Promise<void>;
  primaryBtnDisabled?: boolean;
  secondaryBtnDisabled?: boolean;
}

export default function Modal({
  title,
  children,
  open = true,
  showCloseIconBtn = false,
  additionalClasses = "",
  btnCloseLabel = "Cancel",
  btnPrimaryLabel = "Submit",
  btnSecondaryLabel = "Done",
  primaryBtnDisabled,
  secondaryBtnDisabled,
  onClickPrimaryBtn,
  onClickSecondaryBtn,
  onClose,
}: Readonly<IModal>) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const handlePrimary = async () => {
    await onClickPrimaryBtn?.();
  };

  const handleSecondary = async () => {
    await onClickSecondaryBtn?.();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogPanel
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
          {onClickPrimaryBtn && (
            <Button
              onClick={handlePrimary}
              className={twMerge(
                "bg-green-500 dark:bg-green-500 hover:bg-green-500 dark:hover:bg-green-500 text-white dark:text-white outline-none border-none px-6 py-4 text-xl font-bold flex-1",
              )}
              disabled={primaryBtnDisabled}>
              {btnPrimaryLabel}
            </Button>
          )}

          {onClickSecondaryBtn && (
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
            )}
            disabled={secondaryBtnDisabled}>
            {btnCloseLabel}
          </Button>
        </Flex>
      </DialogPanel>
    </Dialog>
  );
}
