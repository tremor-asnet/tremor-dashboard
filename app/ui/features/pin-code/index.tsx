"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";

import { usePinCode } from "@/context/pincode";

import { updatePinCode } from "@/services";

import { useToast } from "@/hooks";

import { PIN_CODE_MESSAGES } from "@/constants";

// Enums
import { TOAST_TYPE } from "@/context/toast";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

export default function PinCode({ pinCode }: { pinCode?: number }) {
  const { isShowPinCodeModal, confirmPinCode, hidePinCodeModal, setPinCode } =
    usePinCode();

  const { openToast } = useToast();

  useEffect(() => {
    pinCode && setPinCode(pinCode);
  }, [pinCode, setPinCode]);

  const handleSubmit = useCallback(
    async (code: number) => {
      const { SETUP_FAILED, SETUP_SUCCESS, CONFIRMATION_SUCCESS } =
        PIN_CODE_MESSAGES;

      if (pinCode) {
        const isMatch = confirmPinCode(code);

        isMatch &&
          openToast({
            type: TOAST_TYPE.SUCCESS,
            message: CONFIRMATION_SUCCESS,
          });

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
    ? { title: "Please enter your PIN code" }
    : {
        title: "Please set the PIN code to your account",
        btnCloseLabel: "Skip",
        btnPrimaryLabel: "Set",
      };

  if (!isShowPinCodeModal) {
    return null;
  }

  return (
    <PinCodeModal
      onSubmit={handleSubmit}
      onClose={hidePinCodeModal}
      open={isShowPinCodeModal}
      {...modalProps}
    />
  );
}
