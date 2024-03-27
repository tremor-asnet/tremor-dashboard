"use client";

import dynamic from "next/dynamic";
import React, { useCallback } from "react";

import { usePinCode } from "@/context/pincode";

import { useToast } from "@/hooks";

import { PIN_CODE_MESSAGES } from "@/constants";

// Enums
import { TOAST_TYPE } from "@/context/toast";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

interface IPinCode {
  onConfirm?: () => void;
  isShowPinCodeModal?: boolean;
  onClose?: () => void;
}

export default function PinCode({ onConfirm, ...others }: IPinCode) {
  const {
    pinCode,
    confirmPinCode,
    setPinCode,
    isShowPinCodeModal: initial,
  } = usePinCode(onConfirm);

  const { isShowPinCodeModal = initial, onClose } = others;

  const { openToast } = useToast();

  const handleSubmit = useCallback(
    async (code: number) => {
      const { SETUP_FAILED, SETUP_SUCCESS, CONFIRMATION_SUCCESS } =
        PIN_CODE_MESSAGES;

      if (pinCode) {
        const isMatch = confirmPinCode(code);

        if (isMatch) {
          openToast({
            type: TOAST_TYPE.SUCCESS,
            message: CONFIRMATION_SUCCESS,
          });

          onConfirm?.();
        }

        return;
      }

      const isSuccess = await setPinCode(code);
      if (isSuccess) {
        onConfirm?.();
        openToast({
          type: isSuccess ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
          message: isSuccess ? SETUP_SUCCESS : SETUP_FAILED,
        });
      }
    },
    [confirmPinCode, onConfirm, openToast, pinCode, setPinCode],
  );

  const modalProps = pinCode
    ? { title: "Enter your PIN code" }
    : {
        title: "Set your PIN code",
        btnCloseLabel: "Skip",
        btnPrimaryLabel: "Set",
      };

  return (
    <PinCodeModal
      onSubmit={handleSubmit}
      onClose={onClose}
      open={isShowPinCodeModal}
      {...modalProps}
    />
  );
}
