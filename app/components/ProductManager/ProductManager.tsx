"use client";

// Libs
import { useState } from "react";

// Components
import Stepper from "@/components/common/Stepper/Stepper";
import ProductInfoForm from "@/components/ProductManager/ProductInfoForm/ProductInfoForm";

// Types
import { IProductInfo, Step } from "@/types";

const ProductManager = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const steps: Step[] = [
    { index: 1, content: "Product Info" },
    { index: 2, content: "Media" },
    { index: 3, content: "Social" },
    { index: 4, content: "Pricing" },
  ];

  const handleSubmitProductInfoForm = (data: IProductInfo) => {
    // TODO: handle something with data from ProductInfoForm here
  };

  return (
    <div className="flex flex-col items-center relative p-4 bg-white dark:bg-[#202940] rounded-lg shadow-md mx-auto w-full">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        total={steps.length}
        extendClass="new-product-stepper"
      />
      <ProductInfoForm onSubmit={handleSubmitProductInfoForm} />
    </div>
  );
};

export default ProductManager;
