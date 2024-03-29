"use client";

// Libs
import { useRouter } from "next/navigation";
import { useState } from "react";

// Components
import { Stepper } from "@/ui/components";
import {
  MediaForm,
  PricingForm,
  ProductInfoForm,
  SocialForm,
} from "@/ui/features/products/Forms";

// Types
import { IMedia, NewPricing, NewInfo, NewSocial, ProductData } from "@/types";

// Constants
import { NEW_PRODUCT_FORM_STEPS } from "@/constants/steps";

// Components
import { LoadingIndicator } from "@/ui/components";
// Services
import { addNewProduct } from "@/services";

const AddProductForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [newProduct, setNewProduct] = useState<ProductData>({
    productName: "",
    description: "",
    weight: 0,
    category: 1,
    quantity: 0,
    price: 0,
    providerName: "",
    image: "",
    currency: 0,
    sku: "",
    tags: [],
    shopifyUrl: "",
    facebookUrl: "",
    instagramUrl: "",
  });

  const onClickBackButton = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderLoading = isLoading ? (
    <LoadingIndicator
      width={16}
      height={16}
      additionalClass="fixed top-1/2 z-20"
      fillColor="gray-500"
    />
  ) : null;

  const formContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProductInfoForm
            productName={newProduct.productName}
            description={newProduct.description}
            providerName={newProduct.providerName}
            weight={newProduct.weight}
            category={newProduct.category}
            quantity={newProduct.quantity}
            onSubmit={handleSubmitProductInfoForm}
          />
        );
      case 2:
        return (
          <MediaForm
            onBack={onClickBackButton}
            onSubmit={handleSubmitMediaForm}
          />
        );
      case 3:
        return (
          <SocialForm
            shopifyUrl={newProduct.shopifyUrl}
            facebookUrl={newProduct.facebookUrl}
            instagramUrl={newProduct.instagramUrl}
            onBack={onClickBackButton}
            onSubmit={handleSubmitSocialForm}
          />
        );
      case 4:
        return (
          <>
            {renderLoading}
            <PricingForm
              price={newProduct.price}
              currency={newProduct.currency}
              sku={newProduct.sku}
              tags={newProduct.tags}
              onBack={onClickBackButton}
              onSubmit={handleSubmitPricingForm}
            />
          </>
        );
      default:
        return null;
    }
  };

  const handleSubmitProductInfoForm = (info: NewInfo) => {
    setNewProduct({
      ...newProduct,
      productName: info.productName,
      description: info.description,
      providerName: info.providerName,
      weight: Number(info.weight),
      category: Number(info.category),
      quantity: Number(info.quantity),
    });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitMediaForm = (media: IMedia) => {
    setNewProduct({ ...newProduct, image: media.image });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitSocialForm = (social: NewSocial) => {
    setNewProduct({
      ...newProduct,
      shopifyUrl: social.shopifyUrl,
      facebookUrl: social.facebookUrl,
      instagramUrl: social.instagramUrl,
    });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitPricingForm = async (pricing: NewPricing) => {
    const product: ProductData = {
      ...newProduct,
      price: Number(pricing.price),
      currency: Number(pricing.currency),
      sku: pricing.sku,
      tags: pricing.tags?.map(Number),
    };
    setIsLoading(true);

    try {
      await addNewProduct(product);
      // TODO: display toast
      router.push("product-list");
    } catch (error) {
      // TODO: handle Error here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center relative p-4 bg-white dark:bg-[#202940] rounded-lg shadow-md mx-auto w-full">
      <Stepper
        steps={NEW_PRODUCT_FORM_STEPS}
        currentStep={currentStep}
        total={NEW_PRODUCT_FORM_STEPS.length}
        extendClass="new-product-stepper"
      />
      {formContent()}
    </div>
  );
};

export default AddProductForm;
