// Libs
import { useForm } from "react-hook-form";

// Components
import Socials from "../../AddProduct/Socials/Socials";

// Types
import { NewSocial } from "@/types";

interface SocialFormProps {
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  onBack: () => void;
  onSubmit: (social: NewSocial) => void;
}

const SocialForm = ({
  shopifyUrl,
  facebookUrl,
  instagramUrl,
  onBack,
  onSubmit,
}: SocialFormProps) => {
  const { control, handleSubmit } = useForm<NewSocial>({
    defaultValues: {
      shopifyUrl,
      facebookUrl,
      instagramUrl,
    },
    mode: "onSubmit",
  });

  return (
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Socials
      </h6>
      <Socials control={control} />
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

export default SocialForm;
