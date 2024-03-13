// Components
import Image from "next/image";
import { Text, Title, Button } from "@tremor/react";

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
      <Title className="font-bold dark:text-white">Preview Image</Title>
      <Image
        className="max-w-full my-4"
        src={url}
        alt="Uploaded image"
        width={width}
        height={height}
      />
      <Text className="text-tremor-title text-black dark:text-white">
        {filename}
      </Text>
      <Button
        className="mt-2 text-sm text-white hover:text-white dark:text-grayter dark:hover:text-grayter px-4 py-2 bg-grayter dark:bg-white rounded hover:bg-graydark"
        onClick={onRemove}
        variant="light">
        Remove photo
      </Button>
    </div>
  );
};

export default ImagePreview;
