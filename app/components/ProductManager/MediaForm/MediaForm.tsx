"use client";

// Libs
import { useEffect } from "react";
import { useForm } from "react-hook-form";

// Components
import Media from "@/components/ProductManager/common/Media/Media";

// Types
import { IMedia } from "@/types";

// Hooks
import useImageUploader from "@/hooks/useImageUploader";

// Components
import ImagePreview from "../common/ImagePreview/ImagePreview";

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

  useEffect(() => {
    setValue("image", image.url);
  }, [cdnResponse]);

  const uploadContent = isUpload ? (
    <p className="my-4 text-md font-bold">Uploading ...</p>
  ) : (
    <ImagePreview
      filename={image.filename}
      url={image.url}
      width={width}
      height={height}
    />
  );

  return (
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Media
      </h6>
      <Media control={control} onUpload={upload} />
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
