"use client";

// Libs
import { useState } from "react";

// Components
import Stepper from "@/components/common/Stepper/Stepper";
import ProductInfoForm from "@/components/ProductManager/ProductInfoForm/ProductInfoForm";
import MediaForm from "@/components/ProductManager/MediaForm/MediaForm";
import SocialForm from "@/components/ProductManager/SocialForm/SocialForm";
import PricingForm from "@/components/ProductManager/PricingForm/PricingForm";

// Types
import { IMedia, IPricing, IProductInfo, ISocial, NewProduct } from "@/types";

// Constants
import { NEW_PRODUCT_FORM_STEPS } from "@/constants/steps";

const ProductManager = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    productName: "",
    description: "",
    weight: 0,
    category: 1,
    quantity: 0,
    price: 0,
    isAvailable: true,
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

  const formContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ProductInfoForm
            productName={newProduct.productName}
            description={newProduct.description}
            weight={newProduct.weight}
            category={newProduct.category}
            quantity={newProduct.quantity}
            onSubmit={handleSubmitProductInfoForm}
          />
        );
      case 2:
        return (
          <MediaForm
            image={newProduct.image}
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
          <PricingForm
            price={newProduct.price}
            currency={newProduct.currency}
            sku={newProduct.sku}
            tags={newProduct.tags}
            onBack={onClickBackButton}
            onSubmit={handleSubmitPricingForm}
          />
        );
      default:
        return null;
    }
  };

  const handleSubmitProductInfoForm = (info: IProductInfo) => {
    setNewProduct({
      ...newProduct,
      productName: info.productName,
      description: info.description,
      weight: info.weight,
      category: info.category,
      quantity: info.quantity,
    });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitMediaForm = (media: IMedia) => {
    setNewProduct({ ...newProduct, image: media.image });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitSocialForm = (social: ISocial) => {
    setNewProduct({
      ...newProduct,
      shopifyUrl: social.shopifyUrl,
      facebookUrl: social.facebookUrl,
      instagramUrl: social.instagramUrl,
    });
    setCurrentStep(currentStep + 1);
  };

  const handleSubmitPricingForm = (pricing: IPricing) => {
    setNewProduct({
      ...newProduct,
      price: pricing.price,
      currency: pricing.currency,
      sku: pricing.sku,
      tags: pricing.tags?.map(Number),
    });

    // TODO : Integrate add new product API here and redirect to product list page
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

export default ProductManager;
