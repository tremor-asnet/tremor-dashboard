"use client";

import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useMemo } from "react";

import { usePinCode } from "@/context/pincode";

import { updatePinCode } from "@/services";
import { useToast } from "@/hooks";
import { FaCheckCircle } from "react-icons/fa";
import { CONFIRM_PIN_CODE_MESSAGE, SET_PIN_CODE_MESSAGE } from "@/constants";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

export default function PinCode({ pinCode }: { pinCode?: number }) {
  const {
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
        const isSuccess = confirmPinCode(code);

        isSuccess &&
          openToast({
            toastType: {
              icon: <FaCheckCircle />,
              message: CONFIRM_PIN_CODE_MESSAGE.SUCCESS,
              color: "green",
            },
          });

        return isSuccess;
      }

      const { isSuccess } = await updatePinCode(code);

      !!isSuccess &&
        openToast({
          toastType: {
            icon: <FaCheckCircle />,
            message: SET_PIN_CODE_MESSAGE.SUCCESS,
            color: "green",
          },
        });

      return !!isSuccess;
    },
    [confirmPinCode, openToast, pinCode],
  );

  const modalProps = useMemo(() => {
    if (pinCode) {
      return { title: "Please enter your PIN code" };
    }

    return {
      title: "Please set the PIN code to your account",
      btnCloseLabel: "Skip",
      btnPrimaryLabel: "Set",
    };
  }, [pinCode]);

  if (!isShowPinCodeModal) {
    return null;
  }

  return (
    <PinCodeModal
      onSubmit={handleSubmit}
      onClose={hidePinCodeModal}
      {...modalProps}
    />
  );
}
