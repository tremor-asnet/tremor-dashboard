"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

import { usePinCode } from "@/context/pincode";

import { getPinCode, updatePinCode } from "@/services";
import { useToast } from "@/hooks";
import { FaCheckCircle } from "react-icons/fa";
import { CONFIRM_PIN_CODE_MESSAGE, SET_PIN_CODE_MESSAGE } from "@/constants";

const PinCodeModal = dynamic(() => import("@/ui/components/PinCodeModal"), {
  ssr: false,
});

export default function PinCode() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    pinCode,
    isShowPinCodeModal,
    confirmPinCode,
    hidePinCodeModal,
    showPinCodeModal,
    setPinCode,
  } = usePinCode();

  const { openToast } = useToast();

  useEffect(() => {
    const fetchPinCode = async () => {
      setIsLoading(true);

      const pinCode = await getPinCode();
      pinCode && setPinCode(pinCode);

      setIsLoading(false);
    };

    fetchPinCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      pinCode ? hidePinCodeModal() : showPinCodeModal();
    }
  }, [hidePinCodeModal, isLoading, pinCode, showPinCodeModal]);

  const handleSubmit = async (code: number) => {
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
  };

  const handleClose = () => {
    hidePinCodeModal();
  };

  if (!isShowPinCodeModal) {
    return null;
  }

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
      onClose={handleClose}
      {...modalProps}
    />
  );
}
