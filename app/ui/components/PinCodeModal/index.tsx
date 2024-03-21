"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

import { PinCode } from "./PinCode";
import { isValidatePinCode } from "@/utils/pincode";

const Modal = dynamic(() => import("@/ui/components/Modal"), { ssr: false });

interface IPinCodeModal {
  onSubmit?: (codes: string) => void;
}

const PinCodeModal = ({ onSubmit }: IPinCodeModal) => {
  const [codes, setCodes] = useState("");

  const handleSubmit = () => {
    onSubmit?.(codes);
    // Only test UI and behavior will remove before merge
    console.log(codes);
  };

  return (
    <Modal
      title="Please enter your PIN code"
      additionalClasses="md:min-w-[390px]"
      primaryBtnDisabled={!isValidatePinCode(codes, 4)}
      onPrimaryBtn={handleSubmit}>
      <PinCode length={4} onChange={setCodes} />
    </Modal>
  );
};

export default PinCodeModal;
