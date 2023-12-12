import { memo } from "react";
import Image from "next/image";

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
}: IAvatarProps): JSX.Element => {
  return (
    <div className={`inline-flex rounded-full overflow-hidden ${className}`}>
      <Image
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
