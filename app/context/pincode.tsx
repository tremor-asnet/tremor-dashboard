"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { updatePinCode } from "@/services";

interface IPinCodeContext {
  pinCode?: number;
  isShowPinCodeModal: boolean;
  setPinCode: (values: number) => void;
}

const initialPinCodeContext: IPinCodeContext = {
  isShowPinCodeModal: false,
  setPinCode: () => {},
};

const PinCodeContext = createContext(initialPinCodeContext);

interface IPinCodeProvider {
  children: ReactNode;
  pinCode?: number;
  userId?: number;
}

const PinCodeProvider = ({
  children,
  pinCode: initialPinCode,
  userId,
}: IPinCodeProvider) => {
  const [pinCode, setPinCode] = useState<number | undefined>(initialPinCode);

  const pinCodeContextValue: IPinCodeContext = {
    pinCode,
    setPinCode,
    isShowPinCodeModal: !!userId && !pinCode,
  };

  return (
    <PinCodeContext.Provider value={pinCodeContextValue}>
      {children}
    </PinCodeContext.Provider>
  );
};

const usePinCode = (callback?: () => void) => {
  const context = useContext(PinCodeContext);

  if (!context) {
    throw new Error("usePinCode hooks should using inside PinCodeProvider!");
  }

  const { pinCode, setPinCode, isShowPinCodeModal } = context;

  const handleConfirmPinCode = useCallback(
    (code: number) => {
      const isMatch = code === pinCode;

      if (isMatch) {
        callback?.();
      }

      return isMatch;
    },
    [callback, pinCode],
  );

  const handleSetPinCode = useCallback(
    async (pinCode: number) => {
      const { isSuccess } = await updatePinCode(pinCode);

      if (isSuccess) {
        setPinCode(pinCode);
      }

      return isSuccess;
    },
    [setPinCode],
  );

  return {
    pinCode,
    setPinCode: handleSetPinCode,
    confirmPinCode: handleConfirmPinCode,
    isShowPinCodeModal,
  };
};

export { PinCodeProvider, usePinCode };
