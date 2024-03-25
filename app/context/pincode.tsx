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
  isConfirmPinCode: boolean;
  pinCode?: number;
  isShowPinCodeModal: boolean;
  setPinCode: (code: number) => void;
  showPinCodeModal: () => void;
  hidePinCodeModal: () => void;
  confirmPinCode: (code: number) => boolean;
}

const initialPinCodeContext: IPinCodeContext = {
  isConfirmPinCode: false,
  confirmPinCode: () => false,
  hidePinCodeModal: () => {},
  setPinCode: () => false,
  showPinCodeModal: () => {},
  isShowPinCodeModal: false,
};

const PinCodeContext = createContext(initialPinCodeContext);

const PinCodeProvider = ({ children }: { children: ReactNode }) => {
  const [isConfirmPinCode, setIsConfirmPinCode] = useState(false);
  const [isShowPinCodeModal, setIsShowPinCodeModal] = useState(false);
  const [pinCode, setPinCode] = useState<number>();

  useEffect(() => {
    setIsShowPinCodeModal(!pinCode);
  }, [pinCode]);

  const handleShowPinCodeModal = useCallback(
    () => setIsShowPinCodeModal(true),
    [],
  );

  const handleHidePinCodeModal = useCallback(
    () => setIsShowPinCodeModal(false),
    [],
  );

  const handleConfirmPinCode = useCallback(
    (code: number) => {
      const isMatch = code === pinCode;
      setIsConfirmPinCode(isMatch);
      isMatch ? handleHidePinCodeModal() : handleShowPinCodeModal();
      return isMatch;
    },
    [handleHidePinCodeModal, handleShowPinCodeModal, pinCode],
  );

  const pinCodeContextValue: IPinCodeContext = {
    isConfirmPinCode,
    confirmPinCode: handleConfirmPinCode,
    pinCode,
    isShowPinCodeModal,
    setPinCode,
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
