"use client";

import Image from "next/image";
import { useState } from "react";

// Constants
import { NOT_FOUND } from "@/constants";

interface ImageProps {
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

const CustomImage = ({
  className,
  src,
  width,
  height,
  alt,
  sizes,
  ...rest
}: ImageProps) => {
  const [fallbackSrc, setFallbackImgSrc] = useState(src);

  const handleOnError = () => setFallbackImgSrc(NOT_FOUND.SRC);

  return (
    <>
      <Image
        className={`${!fallbackSrc ? "bg-[white]" : ""} ${className}`}
        src={fallbackSrc}
        width={width}
        height={height}
        sizes={sizes}
        alt={alt}
        onError={handleOnError}
        {...rest}
      />
    </>
  );
};

export default CustomImage;
