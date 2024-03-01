"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Components
import { Button, Col, Grid, Text } from "@tremor/react";
import { LoadingIndicator, Toast } from "@/ui/components";
import ProductImage from "../EditProduct/ProductImage/ProductImage";
const Socials = dynamic(() => import("../EditProduct/ProductSocials/Socials"));
const ProductInfo = dynamic(
  () => import("../EditProduct/ProductInfo/ProductInfo"),
);
const PricingInfo = dynamic(
  () => import("../EditProduct/ProductPricing/PricingInfo"),
);

// Icons
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

// Services
import { editProduct } from "@/services";

// Types
import { ProductData } from "@/types";

// Constants
import { EDIT_PRODUCT_MESSAGE, NOT_FOUND_IMAGE } from "@/constants";

// Hooks
import useImageUploader from "@/hooks/useImageUploader";

// Contexts
import { ToastContext } from "@/context/toast";

const EditProductForm = ({
  productData,
  id,
}: {
  productData: ProductData;
  id: number;
}) => {
  const {
    productName,
    price,
    tags,
    shopifyUrl,
    facebookUrl,
    instagramUrl,
    quantity,
    weight,
    category,
    description,
    image,
    currency,
    sku,
    providerName,
    createdAt,
  } = productData;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = useForm<ProductData>({
    defaultValues: {
      productName,
      price,
      tags,
      shopifyUrl,
      facebookUrl,
      instagramUrl,
      quantity,
      weight,
      category,
      description,
      image,
      currency,
      sku,
      providerName,
      createdAt,
    },
  });

  const { handleSubmit, formState, reset } = formHandler;
  const { upload, imageValue, removeImage, isUpload } = useImageUploader(image);

  useEffect(() => {
    formHandler.setValue("image", imageValue, { shouldDirty: true });
  }, [imageValue]);

  const { openToast, isOpen, icon, message, color } = useContext(ToastContext);

  const onSubmit = async (data: ProductData) => {
    try {
      const convertedTagsValue = data.tags.map(value => {
        return Number(value);
      });

      const newData = {
        ...data,
        category: +data.category,
        currency: +data.currency,
        tags: convertedTagsValue,
        createdAt: new Date().toISOString(),
        image: imageValue,
      };

      openToast({
        isOpen: true,
        message: EDIT_PRODUCT_MESSAGE.PENDING,
        icon: <TbExclamationMark />,
        color: "yellow",
      });

      setIsLoading(true);

      await editProduct(id, newData);

      reset(data);

      setIsLoading(false);

      router.refresh();

      openToast({
        isOpen: true,
        message: EDIT_PRODUCT_MESSAGE.SUCCESS,
        icon: <FaCheckCircle />,
        color: "green",
      });
    } catch (err: any) {
      openToast({
        isOpen: true,
        message: EDIT_PRODUCT_MESSAGE.FAILED,
        icon: RxCross2,
        color: "red",
      });
    }
  };

  const onRemoveImage = () => {
    removeImage();
    formHandler.setValue("image", "", { shouldDirty: true });
  };

  const handleCloseToast = () => {
    openToast({
      isOpen: false,
      message: "",
      icon: null,
      color: "green",
    });
  };

  return (
    <>
      {isLoading && (
        <div className="opacity-25 fixed inset-0 z-20 bg-black cursor-not-allowed" />
      )}
      <FormProvider {...formHandler}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="w-full text-end absolute -mt-24">
            <Button
              type="submit"
              className="antialiased text-center uppercase px-6 py-2.5 bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary rounded-lg border-0 hover:!shadow-btn-primary-hover items-end"
              size="xs"
              disabled={!formState.isDirty}>
              {isLoading ? (
                <LoadingIndicator
                  width={4}
                  height={5}
                  additionalClass="px-1.5"
                />
              ) : (
                <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
                  Save
                </Text>
              )}
            </Button>
          </div>
          <Grid numItemsSm={1} numItemsLg={3} className="gap-6">
            <div className="w-full">
              <ProductImage
                name={productName}
                desc={description}
                image={imageValue}
                onRemoveImage={onRemoveImage}
                onUpload={upload}
                disabled={imageValue === NOT_FOUND_IMAGE ? true : false}
                isUpload={isUpload}
              />
            </div>
            <Col numColSpanSm={1} numColSpanLg={2}>
              <ProductInfo />
            </Col>
            <Col numColSpan={1}>
              <Socials />
            </Col>
            <Col numColSpanSm={1} numColSpanLg={2}>
              <PricingInfo />
            </Col>
          </Grid>
        </form>
      </FormProvider>

      {isOpen && (
        <div className="flex justify-center fixed right-5 bottom-50 z-30">
          <Toast
            icon={icon}
            color={color}
            message={message}
            onClose={handleCloseToast}
          />
        </div>
      )}
    </>
  );
};

export default EditProductForm;
