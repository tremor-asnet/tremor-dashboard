// Libs
import { useForm } from "react-hook-form";

// Components
import Media from "@/components/ProductManager/common/Media/Media";

// Types
import { IMedia } from "@/types";

interface MediaFormProps {
  image: string;
  onBack: () => void;
  onSubmit: (data: IMedia) => void;
}

const MediaForm = ({ image, onBack, onSubmit }: MediaFormProps) => {
  const { control, handleSubmit } = useForm<IMedia>({
    defaultValues: {
      image,
    },
    mode: "onSubmit",
  });
  return (
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Media
      </h6>
      <Media control={control} />
      <div className="mt-6">
        <input
          className="float-left btn-form-secondary"
          type="button"
          value="BACK"
          onClick={onBack}
        />
        <input
          className="float-right btn-form-primary"
          type="submit"
          value="NEXT"
        />
      </div>
    </form>
  );
};

export default MediaForm;
