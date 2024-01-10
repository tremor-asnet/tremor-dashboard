"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  priority = true,
  ...rest
}: ImageProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleOnError = () => setImgSrc(NOT_FOUND.SRC);

  return (
    <>
      <Image
        {...rest}
        className={`bg-[white] ${className}`}
        src={imgSrc ? imgSrc : NOT_FOUND.SRC}
        width={width}
        height={height}
        sizes={sizes}
        alt={alt}
        priority={priority}
        onError={handleOnError}
      />
    </>
  );
};

export default CustomImage;
