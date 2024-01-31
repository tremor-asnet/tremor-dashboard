// Libs
import { Control, Controller } from "react-hook-form";

//Types
import { IMedia } from "@/types";

interface MediaProps {
  control: Control<IMedia>;
}

const Media = ({ control }: MediaProps) => {
  return (
    <Controller
      name="image"
      control={control}
      render={({ field }) => (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-36 border border-gray-300 rounded-lg">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Drop file here to upload
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/webp"
              {...field}
            />
          </label>
        </div>
      )}
    />
  );
};

export default Media;
