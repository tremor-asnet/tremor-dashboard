"use client";

// Libs
import { Control, Controller } from "react-hook-form";
import { ChangeEvent, DragEvent, useState } from "react";

//Types
import { IMedia } from "@/types";

// Constants
import { DRAG_ZONE } from "@/constants";

// Components
import { Text } from "@tremor/react";

interface MediaProps {
  control: Control<IMedia>;
  onUpload: (file: File) => void;
}

const Media = ({ control, onUpload }: MediaProps) => {
  const [inputStyle, setInputStyle] = useState({
    text: DRAG_ZONE.DEFAULT.TEXT,
    style: DRAG_ZONE.DEFAULT.STYLE,
  });

  const handleDefaultDragOver = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  const handleUploadFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(e.target.files[0]);
    }
  };

  const handleDragEnter = () => {
    setInputStyle({
      text: DRAG_ZONE.ON_DRAG.TEXT,
      style: DRAG_ZONE.ON_DRAG.STYLE,
    });
  };

  const handleDragLeave = () => {
    setInputStyle({
      text: DRAG_ZONE.DEFAULT.TEXT,
      style: DRAG_ZONE.DEFAULT.STYLE,
    });
  };

  const handleDropFile = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    onUpload(e.dataTransfer.files[0]);
  };

  return (
    <Controller
      name="image"
      control={control}
      render={() => (
        <div className="flex items-center justify-center w-full">
          <label
            onDragOver={handleDefaultDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDropFile}
            className={`flex flex-col items-center justify-center w-full h-36 border ${inputStyle.style} rounded-lg hover:cursor-pointer`}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Text className="text-gray-500 dark:text-gray-400">
                {inputStyle.text}
              </Text>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleUploadFile}
            />
          </label>
        </div>
      )}
    />
  );
};

export default Media;
