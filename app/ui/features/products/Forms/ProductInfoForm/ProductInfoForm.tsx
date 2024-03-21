"use client";

// Libs
import { useForm } from "react-hook-form";

// Components
import { ProductInfo } from "@/ui/features/products/AddProduct";
import { Button, Text } from "@tremor/react";

// Types
import { NewInfo } from "@/types";

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
  const { control, handleSubmit } = useForm<NewInfo>({
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
    <form className="w-full mt-20" onSubmit={handleSubmit(onSubmit)}>
      <h6 className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </h6>
      <ProductInfo control={control} />
      <div className="mt-6">
        <Button
          className="float-right btn-form-primary rounded-lg dark:bg-gradient-pickled py-3 px-6 mt-8 bg-gradient-primary hover:dark:!bg-gradient-pickled border-none dark:text-white text-center"
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
