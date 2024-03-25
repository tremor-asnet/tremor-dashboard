"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

interface IPinCodeContext {
  isConfirm: boolean;
  pinCode?: number;
  isShowPinCodeModal: boolean;
  setPinCode: (code: number) => void;
  showPinCodeModal: () => void;
  hidePinCodeModal: () => void;
  confirmPinCode: (code: number) => void;
}

const initialPinCodeContext: IPinCodeContext = {
  isConfirm: false,
  confirmPinCode: () => false,
  hidePinCodeModal: () => {},
  setPinCode: () => false,
  showPinCodeModal: () => {},
  isShowPinCodeModal: false,
};

const PinCodeContext = createContext(initialPinCodeContext);

const PinCodeProvider = ({ children }: { children: ReactNode }) => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isShowPinCodeModal, setIsShowPinCodeModal] = useState(false);
  const [pinCode, setPinCode] = useState<number>();

  useEffect(() => {
    pinCode && !isConfirm && setIsConfirm(true);
  }, [pinCode, isConfirm]);

  const handleConfirmPinCode = useCallback(
    (code: number) => {
      setIsConfirm(code === pinCode);
    },
    [pinCode],
  );

  const handleShowPinCodeModal = useCallback(
    () => setIsShowPinCodeModal(true),
    [],
  );

  const handleHidePinCodeModal = useCallback(
    () => setIsShowPinCodeModal(false),
    [],
  );

  const handleSetPinCode = useCallback((code: number) => {
    setPinCode(code);
  }, []);

  const pinCodeContextValue: IPinCodeContext = {
    isConfirm,
    confirmPinCode: handleConfirmPinCode,
    pinCode,
    isShowPinCodeModal,
    setPinCode: handleSetPinCode,
    hidePinCodeModal: handleHidePinCodeModal,
    showPinCodeModal: handleShowPinCodeModal,
  };

  return (
    <PinCodeContext.Provider value={pinCodeContextValue}>
      {children}
    </PinCodeContext.Provider>
  );
};

const usePinCode = () => {
  const context = useContext(PinCodeContext);

  if (!context) {
    throw new Error("usePinCode hooks should using inside PinCodeProvider!");
  }

  return context;
};

export { PinCodeProvider, usePinCode };
