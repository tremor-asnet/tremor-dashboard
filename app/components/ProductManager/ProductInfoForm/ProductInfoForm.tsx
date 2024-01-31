"use client";

// Libs
import { useForm } from "react-hook-form";

// Components
import ProductInfo from "@/components/ProductManager/common/ProductInfo/ProductInfo";

// Types
import { IProductInfo } from "@/types";

interface ProductInfoFormProps {
  onSubmit: (data: IProductInfo) => void;
}

const ProductInfoForm = ({ onSubmit }: ProductInfoFormProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IProductInfo>({
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
          className="float-right py-2.5 px-6 bg-black dark:bg-[#485976] text-white font-medium text-sm rounded-md"
          type="submit"
          value="NEXT"
        />
      </div>
    </form>
  );
};

export default ProductInfoForm;
