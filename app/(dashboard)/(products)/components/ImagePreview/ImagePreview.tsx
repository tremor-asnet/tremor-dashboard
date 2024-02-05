// Components
import Image from "next/image";

interface PreviewImageProps {
  filename: string;
  url: string;
  width: number;
  height: number;
}

const ImagePreview = ({ filename, url, width, height }: PreviewImageProps) => {
  if (!url) {
    return null;
  }

  return (
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
  );
};

export default ImagePreview;
