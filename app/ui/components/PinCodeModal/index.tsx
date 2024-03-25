"use client";

import React, { memo, useCallback, useState } from "react";

import { PinCode } from "./PinCode";
import Modal, { IModal } from "../Modal";

import { isValidPinCode } from "@/utils";

import { PIN_CODE_LENGTH } from "@/constants";

interface IPinCodeModal extends Omit<IModal, "children"> {
  onSubmit: (codes: number) => void | Promise<void>;
}

const PinCodeModal = ({ onSubmit, ...others }: IPinCodeModal) => {
  const [codes, setCodes] = useState("");

  const handleSubmit = useCallback(async () => {
    await onSubmit(parseFloat(codes));
    setCodes("");
  }, [codes, onSubmit]);

  return (
    <Modal
      additionalClasses="md:min-w-[390px] w-[calc(100%-8px)] md:max-w-[390px]"
      primaryBtnDisabled={!isValidPinCode(codes, PIN_CODE_LENGTH)}
      onClickPrimaryBtn={handleSubmit}
      {...others}>
      <PinCode length={PIN_CODE_LENGTH} onChange={setCodes} value={codes} />
    </Modal>
  );
};

export default memo(PinCodeModal);
