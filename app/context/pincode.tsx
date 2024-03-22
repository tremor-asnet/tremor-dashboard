"use client";

import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface IPinCodeContext {
  pinCode?: number;
  isShowPinCodeModal: boolean;
  setPinCode: (code: number) => boolean;
  showPinCodeModal: () => void;
  hidePinCodeModal: () => void;
  confirmPinCode: (code: number) => boolean;
}

const initialPinCodeContext: IPinCodeContext = {
  confirmPinCode: () => false,
  hidePinCodeModal: () => {},
  setPinCode: () => false,
  showPinCodeModal: () => {},
  isShowPinCodeModal: false,
};

const PinCodeContext = createContext(initialPinCodeContext);

const PinCodeProvider = ({ children }: { children: ReactNode }) => {
  const [isShowPinCodeModal, setIsShowPinCodeModal] = useState(false);
  const [pinCode, setPinCode] = useState<number>();

  const handleConfirmPinCode = useCallback(
    (code: number) => {
      return code === pinCode;
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
    return true;
  }, []);

  const pinCodeContextValue: IPinCodeContext = useMemo(
    () => ({
      confirmPinCode: handleConfirmPinCode,
      pinCode,
      isShowPinCodeModal,
      setPinCode: handleSetPinCode,
      hidePinCodeModal: handleHidePinCodeModal,
      showPinCodeModal: handleShowPinCodeModal,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleConfirmPinCode, isShowPinCodeModal, pinCode],
  );

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
