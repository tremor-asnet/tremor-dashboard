// Components
import Image from "next/image";
import { Text, Title } from "@tremor/react";
import { Button } from "@/ui/components";

// Constants
import { VARIANT_BUTTON } from "@/constants";

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
        additionalClass="mt-2 rounded-lg dark:bg-gradient-pickled py-3 px-6 bg-gradient-btn-back hover:dark:bg-gradient-pickled border-none dark:text-white dark:hover:text-white text-center box-shadow-transparent"
        onClick={onRemove}
        variantTremor={VARIANT_BUTTON.LIGHT}>
        <Text className="uppercase font-bold text-xs text-gray-900 dark:text-white tracking-wide">
          Remove photo
        </Text>
      </Button>
    </div>
  );
};

export default ImagePreview;
