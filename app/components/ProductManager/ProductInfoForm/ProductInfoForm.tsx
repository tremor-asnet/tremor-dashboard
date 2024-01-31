"use client";

// Libs
import { useForm } from "react-hook-form";

// Components
import ProductInfo from "@/components/ProductManager/common/ProductInfo/ProductInfo";

// Types
import { IProductInfo } from "@/types";

interface ProductInfoFormProps {
  productName: string;
  description: string;
  weight: number;
  category: number;
  quantity: number;
  onSubmit: (data: IProductInfo) => void;
}

const ProductInfoForm = ({
  productName,
  description,
  weight,
  category,
  quantity,
  onSubmit,
}: ProductInfoFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IProductInfo>({
    defaultValues: {
      productName,
      description,
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
      <ProductInfo control={control} errors={errors} />
      <div className="mt-6">
        <input
          className="float-right btn-form-primary"
          type="submit"
          value="NEXT"
        />
      </div>
    </form>
  );
};

export default ProductInfoForm;
