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

interface MediaFormProps {
  onBack: () => void;
  onSubmit: (data: IMedia) => void;
}

const MediaForm = ({ onBack, onSubmit }: MediaFormProps) => {
  const { control, handleSubmit, setValue } = useForm<IMedia>({
    mode: "onSubmit",
  });
  const { isUpload, cdnResponse, upload } = useImageUploader();
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
      <div className="mt-6">
        <input
          className="float-left btn-form-secondary"
          type="button"
          value="BACK"
          onClick={onBack}
          disabled={isUpload}
        />
        <input
          className="float-right btn-form-primary"
          type="submit"
          value="NEXT"
          disabled={isUpload}
        />
      </div>
    </form>
  );
};

export default MediaForm;
