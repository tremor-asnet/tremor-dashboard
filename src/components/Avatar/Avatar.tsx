"use client";

import { memo } from "react";
import Image from "next/image";
import { useImage } from "@/hooks/useImage";

// Define the props for the Input component
interface IAvatarProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Primary UI component for Avatar component
 */
const Avatar = ({
  src,
  width = 48,
  height = 48,
  alt = "Avatar",
  className = "shadow-md",
  sizes,
  priority = true,
  ...rest
}: IAvatarProps): JSX.Element => {
  const { imgSrc, handleOnError } = useImage(src);

  return (
    <div className={`inline-flex rounded-full overflow-hidden ${className}`}>
      <Image
        {...rest}
        src={imgSrc ? imgSrc : "/images/not-found.jpg"}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        priority={priority}
        onError={handleOnError}
      />
    </div>
  );
};

export default memo(Avatar);
