"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useMemo } from "react";

import { usePinCode } from "@/context/pincode";

import { updatePinCode } from "@/services";
import { useToast } from "@/hooks";
import { FaCheckCircle } from "react-icons/fa";
import { PIN_CODE_MESSAGES } from "@/constants";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

export default function PinCode({ pinCode }: { pinCode?: number }) {
  const {
    isConfirm,
    pinCode: currentPinCode,
    isShowPinCodeModal,
    confirmPinCode,
    hidePinCodeModal,
    showPinCodeModal,
    setPinCode,
  } = usePinCode();

  const { openToast } = useToast();

  useEffect(() => {
    if (!currentPinCode) {
      if (pinCode) {
        setPinCode(pinCode);
        hidePinCodeModal();
      }

      showPinCodeModal();
    }
  }, [pinCode, showPinCodeModal, hidePinCodeModal, currentPinCode, setPinCode]);

  const handleSubmit = useCallback(
    async (code: number) => {
      if (pinCode) {
        confirmPinCode(code);

        isConfirm &&
          openToast({
            toastType: {
              icon: <FaCheckCircle />,
              message: PIN_CODE_MESSAGES.CONFIRMATION_SUCCESS,
              color: "green",
            },
          });

        return;
      }

      const { isSuccess } = await updatePinCode(code);

      isSuccess && setPinCode(code);

      const { SETUP_FAILED, SETUP_SUCCESS } = PIN_CODE_MESSAGES;

      openToast({
        toastType: {
          icon: <FaCheckCircle />,
          message: isSuccess ? SETUP_SUCCESS : SETUP_FAILED,
          color: isSuccess ? "green" : "red",
        },
      });
    },
    [confirmPinCode, isConfirm, openToast, pinCode, setPinCode],
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
      open={!isConfirm}
      {...modalProps}
    />
  );
}
