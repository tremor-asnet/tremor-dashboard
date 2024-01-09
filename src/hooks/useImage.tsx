"use client";

import { useEffect, useState } from "react";

export const useImage = (photo: string | undefined) => {
  const [imgSrc, setImgSrc] = useState(photo);

  useEffect(() => {
    setImgSrc(photo);
  }, [photo]);

  const handleOnError = () => {
    () => setImgSrc("/images/not-found.jpg");
  };

  return { imgSrc, handleOnError };
};
