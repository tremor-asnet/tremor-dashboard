"use client";

import { memo } from "react";

// Components
import { CustomImage } from "@/components";

// Define the props for the Input component
interface AvatarProps {
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
}: AvatarProps): JSX.Element => {
  return (
    <div className={`inline-flex rounded-full overflow-hidden ${className}`}>
      <CustomImage
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
};

export default memo(Avatar);
