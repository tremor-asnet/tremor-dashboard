"use client";

import React, { memo, useCallback, useState } from "react";

import { PinCode } from "./PinCode";
import Modal, { IModal } from "../Modal";

import { isValidPinCode } from "@/utils";

import { PIN_CODE_LENGTH } from "@/constants";

interface IPinCodeModal extends Omit<IModal, "children"> {
  onSubmit: (codes: number) => boolean | Promise<boolean>;
}

const PinCodeModal = ({ onSubmit, title, ...others }: IPinCodeModal) => {
  const [codes, setCodes] = useState("");

  const handleSubmit = useCallback(async () => {
    const isSuccess = !!(await onSubmit(parseFloat(codes)));
    setCodes("");
    return isSuccess;
  }, [codes, onSubmit]);

  return (
    <Modal
      title={title}
      additionalClasses="md:min-w-[390px] w-[calc(100%-8px)] md:max-w-[390px]"
      primaryBtnDisabled={!isValidPinCode(codes, PIN_CODE_LENGTH)}
      onPrimaryBtn={handleSubmit}
      {...others}>
      <PinCode length={PIN_CODE_LENGTH} onChange={setCodes} value={codes} />
    </Modal>
  );
};

export default memo(PinCodeModal);
