"use client";

import Image from "next/image";
import { useState } from "react";

// Constants
import { NOT_FOUND, NOT_FOUND_IMAGE } from "@/constants";

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
  const [fallbackSrc, setFallbackImgSrc] = useState(false);

  const handleOnError = () => setFallbackImgSrc(true);

  return (
    <>
      <Image
        className={className}
        src={fallbackSrc ? NOT_FOUND_IMAGE : src}
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
