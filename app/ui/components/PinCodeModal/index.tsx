"use client";

import dynamic from "next/dynamic";
import React from "react";

const Modal = dynamic(() => import("@/ui/components/Modal"), { ssr: false });

export const PinCodeModal = () => {
  return (
    <div>
      {" "}
      <Modal
        title="Test Modal"
        showCloseButton
        labelPrimary="Set"
        onPrimaryBtn={() => console.log("OK!")}>
        <h1>Modal content</h1>
      </Modal>
    </div>
  );
};
