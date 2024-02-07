"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Components
import { Button, Col, Flex, Grid, Text } from "@tremor/react";
import { LoadingIndicator, Toast } from "@/components";
import { FaCheckCircle } from "react-icons/fa";
import { TbExclamationMark } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
const ProductImage = dynamic(
  () => import("../EditProduct/ProductImage/ProductImage"),
);
const Socials = dynamic(() => import("../EditProduct/ProductSocials/Socials"));
const ProductInfo = dynamic(
  () => import("../EditProduct/ProductInfo/ProductInfo"),
);
const PricingInfo = dynamic(
  () => import("../EditProduct/ProductPricing/PricingInfo"),
);

// Services
import { editProduct } from "@/services";

// Types
import { ProductData } from "@/types";

// Constants
import { EDIT_PRODUCT_MESSAGE } from "@/constants";

// Hooks
import useImageUploader from "@/hooks/useImageUploader";

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
  } = productData;

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [toastMsgController, setToastMsgController] = useState<{
    isOpen: boolean;
    message: string;
    icon: ReactNode;
    color: "green" | "red" | "yellow";
  }>({
    isOpen: false,
    message: "",
    icon: null,
    color: "green",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastMsgController({
        isOpen: false,
        message: "",
        icon: null,
        color: "green",
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [toastMsgController.isOpen]);

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
    },
  });

  const { handleSubmit, formState, reset } = formHandler;
  const { upload, imageValue, removeImage } = useImageUploader(image);

  useEffect(() => {
    formHandler.setValue("image", imageValue, { shouldDirty: true });
  }, [imageValue]);

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
        image: imageValue,
      };

      setToastMsgController({
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

      setToastMsgController({
        isOpen: true,
        message: EDIT_PRODUCT_MESSAGE.SUCCESS,
        icon: <FaCheckCircle />,
        color: "green",
      });
    } catch (err: any) {
      setToastMsgController({
        isOpen: true,
        message: EDIT_PRODUCT_MESSAGE.FAILED,
        icon: RxCross2,
        color: "red",
      });
    }
  };

  const handleCloseToast = () => {
    setToastMsgController({
      isOpen: false,
      message: "",
      icon: null,
      color: "green",
    });
  };

  const onRemoveImage = () => {
    removeImage();
    formHandler.setValue("image", "", { shouldDirty: true });
  };

  if (isLoading) {
    return (
      <>
        <div className="opacity-25 fixed inset-0 z-20 bg-black cursor-not-allowed" />
        <Flex className="grow w-full items-center justify-center">
          <Flex flexDirection="col" className="grow w-full h-full items-center">
            <LoadingIndicator
              width={16}
              height={16}
              fillColor="river-bed-500"
            />
            <h2 className="mt-2 text-gray-400">Updating Product...</h2>
          </Flex>
        </Flex>
      </>
    );
  }

  return (
    <>
      <FormProvider {...formHandler}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="w-full text-end absolute -mt-24">
            <Button
              type="submit"
              className="antialiased text-center uppercase px-6 py-2.5 bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary rounded-lg border-0 hover:!shadow-btn-primary-hover items-end"
              size="xs"
              disabled={!formState.isDirty}>
              <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
                Save
              </Text>
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

      {toastMsgController.isOpen && (
        <div className="flex justify-center fixed right-5 bottom-50 z-30">
          <Toast
            icon={<FaCheckCircle />}
            color={toastMsgController.color}
            message={toastMsgController.message}
            onClose={handleCloseToast}
          />
        </div>
      )}
    </>
  );
};

export default EditProductForm;
