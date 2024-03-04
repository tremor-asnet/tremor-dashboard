// Libs
import { useForm } from "react-hook-form";

// Types
import { NewPricing } from "@/types";

// Components
import { Button, Flex, Text } from "@tremor/react";
import { Pricing } from "@/ui/features/products/AddProduct";

interface PricingFormProps {
  price: number;
  sku: string;
  currency: number;
  tags: number[];
  onBack: () => void;
  onSubmit: (pricing: NewPricing) => void;
}

const PricingForm = ({
  price,
  sku,
  currency,
  tags,
  onBack,
  onSubmit,
}: PricingFormProps) => {
  const { control, handleSubmit } = useForm<NewPricing>({
    defaultValues: {
      price,
      sku,
      currency,
      tags: tags?.map(String),
    },
    mode: "onSubmit",
  });

  return (
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Pricing
      </h6>
      <Pricing control={control} />
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
            Send
          </Text>
        </Button>
      </Flex>
    </form>
  );
};

export default PricingForm;
