// Libs
import { useForm } from "react-hook-form";

// Components
import { Socials } from "@/ui/features/products/AddProduct";

// Types
import { NewSocial } from "@/types";
import { Button, Flex, Text } from "@tremor/react";

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
      <Flex className="mt-6">
        <Button
          className="items-start btn-form-secondary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-btn-back hover:dark:!bg-gradient-pickled border-none dark:text-white text-center box-shadow-transparent"
          type="submit"
          onClick={onBack}>
          <Text className="uppercase font-bold text-xs text-gray-900 dark:text-white tracking-wide">
            Back
          </Text>
        </Button>
        <Button
          className="items-end btn-form-primary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-primary hover:dark:!bg-gradient-pickled border-none dark:text-white text-center"
          type="submit">
          <Text className="uppercase font-bold text-xs text-white dark:text-white tracking-wide">
            Next
          </Text>
        </Button>
      </Flex>
    </form>
  );
};

export default SocialForm;
