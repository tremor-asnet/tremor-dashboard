// Libs
import { useForm } from "react-hook-form";

// Components
import { Socials } from "@/ui/features/products/AddProduct";

// Types
import { NewSocial } from "@/types";
import { Flex, Text } from "@tremor/react";
import { Button } from "@/ui/components";

// Constants
import { VARIANT_BUTTON } from "@/constants";

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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewSocial>({
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
      <Socials control={control} errors={errors} />
      <Flex className="mt-6">
        <Button variant={VARIANT_BUTTON.SURFACE} type="submit" onClick={onBack}>
          <Text className="uppercase font-bold text-xs text-gray-900 dark:text-white tracking-wide">
            Back
          </Text>
        </Button>
        <Button
          variant={VARIANT_BUTTON.PRIMARY_CENTER}
          additionalClass="items-end"
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
