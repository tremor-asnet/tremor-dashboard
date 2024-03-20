"use client";

import React, { useState } from "react";
import { PinCode } from "./PinCode";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("@/ui/components/Modal"), { ssr: false });

const PinCodeModal = () => {
  const [codes, setCodes] = useState("");

  return (
    <Modal
      title="Please enter your PIN code"
      btnPrimaryLabel="Set"
      additionalClasses="md:min-w-[390px]"
      disabledPrimaryBtn={codes.length !== 4}
      onPrimaryBtn={() => {}}>
      <PinCode length={4} onChange={setCodes} />
    </Modal>
  );
};

export default PinCodeModal;
