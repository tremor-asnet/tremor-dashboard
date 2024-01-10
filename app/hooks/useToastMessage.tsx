import { useState } from "react";

export const useToast = () => {
  const [isOpenToast, setIsOpenToast] = useState(false);

  const handleCloseToast = () => {
    setIsOpenToast(false);
  };

  const handleOpenToast = () => {
    setIsOpenToast(true);
    setTimeout(() => {
      setIsOpenToast(false);
    }, 3000);
  };

  return { isOpenToast, handleCloseToast, handleOpenToast };
};
