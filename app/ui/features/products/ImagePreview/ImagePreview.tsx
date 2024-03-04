// Components
import Image from "next/image";

interface PreviewImageProps {
  filename: string;
  url: string;
  width: number;
  height: number;
  onRemove: () => void;
}

const ImagePreview = ({
  filename,
  url,
  width,
  height,
  onRemove,
}: PreviewImageProps) => {
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
      <button
        className="mt-2 text-sm text-white dark:text-[#485976] px-4 py-2 bg-[#485976] dark:bg-white rounded hover:bg-[#1a2035]"
        onClick={onRemove}>
        Remove photo
      </button>
    </div>
  );
};

export default ImagePreview;
