"use client";

import Image from "next/image";
import { useState } from "react";

// Constants
import { NO_IMAGE, NOT_FOUND_IMAGE } from "@/constants";

interface ImageProps {
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes?: string;
  priority?: boolean;
  objectFit?: string;
}

const CustomImage = ({
  className,
  src,
  width,
  height,
  alt,
  sizes,
  objectFit,
  ...rest
}: ImageProps) => {
  const [fallbackSrc, setFallbackImgSrc] = useState(false);

  const handleOnError = () => setFallbackImgSrc(true);
  const altImage = src !== NOT_FOUND_IMAGE && alt ? alt : NO_IMAGE;

  return (
    <>
      <Image
        className={className}
        src={fallbackSrc ? NOT_FOUND_IMAGE : src}
        width={width}
        height={height}
        sizes={sizes}
        alt={altImage}
        onError={handleOnError}
        objectFit={objectFit}
        {...rest}
      />
    </>
  );
};

export default CustomImage;
