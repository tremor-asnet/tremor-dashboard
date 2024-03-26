"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useEffect } from "react";

import { usePinCode } from "@/context/pincode";

import { updatePinCode } from "@/services";
import { FaCheckCircle } from "react-icons/fa";

import { useToast } from "@/hooks";

import { PIN_CODE_MESSAGES } from "@/constants";

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

      // handle confirm
      if (pinCode) {
        const isMatch = confirmPinCode(code);

        if (isMatch) {
          openToast({
            toastType: {
              icon: <FaCheckCircle />,
              message: CONFIRMATION_SUCCESS,
              color: "green",
            },
          });
        }

        return;
      }

      const { isSuccess } = await updatePinCode(code);

      if (isSuccess) {
        setPinCode(code);
      }

      openToast({
        toastType: {
          icon: <FaCheckCircle />,
          message: isSuccess ? SETUP_SUCCESS : SETUP_FAILED,
          color: isSuccess ? "green" : "red",
        },
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

  return (
    <PinCodeModal
      onSubmit={handleSubmit}
      onClose={hidePinCodeModal}
      open={isShowPinCodeModal}
      {...modalProps}
    />
  );
}
