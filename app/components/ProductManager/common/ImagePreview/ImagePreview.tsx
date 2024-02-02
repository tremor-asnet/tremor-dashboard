// Components
import Image from "next/image";

// Types
import { ImageInfo } from "@/types";

interface PreviewImageProps {
  width: number;
  height: number;
  imageInfo: ImageInfo;
}

const ImagePreview = ({ imageInfo, width, height }: PreviewImageProps) => {
  const { url, filename } = imageInfo;

  return (
    <>
      {url ? (
        <div className="my-4">
          <p className="text-md font-bold dark:text-white">Preview Image</p>
          <Image
            className="max-w-full my-4"
            src={url}
            alt="Uploaded image"
            width={width}
            height={height}
          />
          <p className="dark:text-white">{filename}</p>
        </div>
      ) : null}
    </>
  );
};

export default ImagePreview;
