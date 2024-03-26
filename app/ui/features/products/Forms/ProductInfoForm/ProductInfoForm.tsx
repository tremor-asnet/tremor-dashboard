"use client";

// Libs
import { useForm } from "react-hook-form";

// Components
import { ProductInfo } from "@/ui/features/products/AddProduct";
import { Text } from "@tremor/react";

// Types
import { NewInfo } from "@/types";
import { Button } from "@/ui/components";

// Constants
import { VARIANT_BUTTON } from "@/constants";

interface ProductInfoFormProps {
  productName: string;
  description: string;
  providerName: string;
  weight: number;
  category: number;
  quantity: number;
  onSubmit: (data: NewInfo) => void;
}

const ProductInfoForm = ({
  productName,
  description,
  providerName,
  weight,
  category,
  quantity,
  onSubmit,
}: ProductInfoFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<NewInfo>({
    defaultValues: {
      productName,
      description,
      providerName,
      weight,
      category,
      quantity,
    },
    mode: "onSubmit",
  });

  return (
    <form
      className="w-full mt-20 product-info"
      onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </h6>
      <ProductInfo control={control} errors={errors} />
      <div className="mt-6">
        <Button
          variant={VARIANT_BUTTON.PRIMARY_CENTER}
          additionalClass="float-right"
          type="submit">
          <Text className="uppercase font-bold text-xs text-white dark:text-white tracking-wide">
            Next
          </Text>
        </Button>
      </div>
    </form>
  );
};

export default ProductInfoForm;
