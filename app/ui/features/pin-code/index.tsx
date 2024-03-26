"use client";

import dynamic from "next/dynamic";
import React, { useCallback } from "react";

import { usePinCode } from "@/context/pincode";

import { updatePinCode } from "@/services";

import { useToast } from "@/hooks";

import { PIN_CODE_MESSAGES } from "@/constants";

// Enums
import { TOAST_TYPE } from "@/context/toast";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

export default function PinCode() {
  const {
    pinCode,
    isShowPinCodeModal,
    confirmPinCode,
    hidePinCodeModal,
    setPinCode,
  } = usePinCode();

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
        }

        return;
      }

      const { isSuccess } = await updatePinCode(code);

      isSuccess && setPinCode(code);

      openToast({
        type: isSuccess ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
        message: isSuccess ? SETUP_SUCCESS : SETUP_FAILED,
      });
    },
    [confirmPinCode, openToast, pinCode, setPinCode],
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
      onClose={hidePinCodeModal}
      open={isShowPinCodeModal}
      {...modalProps}
    />
  );
}
