"use client";

// Libs
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import Media from "../../AddProduct/Media/Media";

// Types
import { IMedia } from "@/types";

// Hooks
import useImageUploader from "@/hooks/useImageUploader";

// Components
import ImagePreview from "../../ImagePreview/ImagePreview";
import { LoadingIndicator } from "@/components";
import { Button, Flex, Text } from "@tremor/react";

interface MediaFormProps {
  onBack: () => void;
  onSubmit: (data: IMedia) => void;
}

const MediaForm = ({ onBack, onSubmit }: MediaFormProps) => {
  const { control, handleSubmit, setValue } = useForm<IMedia>({
    mode: "onSubmit",
  });
  const { isUpload, cdnResponse, upload } = useImageUploader("");
  const { width, height, image } = cdnResponse.data;
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setValue("image", image.url);
    setPreviewImage(image.url);
  }, [cdnResponse]);

  const handleOnRemoveImage = () => {
    setValue("image", "");
    setPreviewImage("");
  };

  const dragZone = previewImage ? null : (
    <Media control={control} onUpload={upload} />
  );

  const uploadContent = isUpload ? (
    <LoadingIndicator
      width={10}
      height={10}
      fillColor="river-bed-500"
      additionalClass="w-full h-40 flex justify-center items-center"
    />
  ) : (
    <ImagePreview
      filename={image.filename}
      url={previewImage}
      width={width}
      height={height}
      onRemove={handleOnRemoveImage}
    />
  );

  return (
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Media
      </h6>
      {dragZone}
      {uploadContent}
      <Flex className="mt-6">
        <Button
          className="items-start btn-form-secondary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-btn-back hover:dark:!bg-gradient-pickled border-none dark:text-white text-center box-shadow-transparent"
          type="submit"
          onClick={onBack}
          disabled={isUpload}>
          <Text className="uppercase font-bold text-xs text-gray-900 dark:text-white tracking-wide">
            Back
          </Text>
        </Button>
        <Button
          className="items-end btn-form-primary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-primary hover:dark:!bg-gradient-pickled border-none dark:text-white text-center"
          type="submit"
          disabled={isUpload}>
          <Text className="uppercase font-bold text-xs text-white dark:text-white tracking-wide">
            Next
          </Text>
        </Button>
      </Flex>
    </form>
  );
};

export default MediaForm;
