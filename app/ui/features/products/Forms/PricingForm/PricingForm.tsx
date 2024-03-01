// Libs
import { useForm } from "react-hook-form";

// Types
import { NewPricing } from "@/types";

// Components
import { Pricing } from "@/ui/features";

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
          value="SEND"
        />
      </div>
    </form>
  );
};

export default PricingForm;
