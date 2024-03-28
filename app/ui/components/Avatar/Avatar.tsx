"use client";

import { memo } from "react";

// Constants
import { AVATAR_SRC } from "@/constants";

// Components
import { CustomImage } from "@/ui/components";

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
  width,
  height,
  alt,
  className = "shadow-md",
  sizes = AVATAR_SRC.md,
  priority = true,
}: AvatarProps): JSX.Element => {
  return (
    <div className={`inline-flex rounded-full overflow-hidden ${className}`}>
      {src ? (
        <CustomImage
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes={sizes}
          priority={priority}
        />
      ) : (
        <p
          className={`w-6 flex justify-center items-center text-white text-xs bg-gray-500 rounded-full`}>
          {alt.substring(0, 1)}
        </p>
      )}
    </div>
  );
};

export default memo(Avatar);
