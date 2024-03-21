"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { PinCode } from "./PinCode";

import { isValidatePinCode } from "@/utils";

const Modal = dynamic(() => import("@/ui/components/Modal"), { ssr: false });

interface IPinCodeModal {
  onSubmit?: (codes: string) => boolean;
}

const PinCodeModal = ({ onSubmit }: IPinCodeModal) => {
  const [codes, setCodes] = useState("");

  const handleSubmit = () => {
    const isSuccess = !!onSubmit?.(codes);

    !isSuccess && setCodes("");

    return isSuccess;
  };

  return (
    <Modal
      title="Please enter your PIN code"
      additionalClasses="md:min-w-[390px]"
      primaryBtnDisabled={!isValidatePinCode(codes, 4)}
      onPrimaryBtn={handleSubmit}>
      <PinCode length={4} onChange={setCodes} value={codes} />
    </Modal>
  );
};

export default PinCodeModal;
