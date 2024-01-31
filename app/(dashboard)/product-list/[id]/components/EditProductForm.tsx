"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

// Components
import { Button, Col, Grid, Text } from "@tremor/react";
const ProductImage = dynamic(
  () => import("@/components/EditProduct/ProductImage/ProductImage"),
);
const Socials = dynamic(
  () => import("@/components/NewProduct/Socials/Socials"),
);
const ProductInfo = dynamic(
  () => import("@/components/NewProduct/ProductInfo/ProductInfo"),
);
const PricingInfo = dynamic(
  () => import("@/components/NewProduct/PricingInfo/PricingInfo"),
);
import { Toast } from "@/components";
import { FaCheckCircle } from "react-icons/fa";

// Services
import { editProduct } from "@/services";

// Types
import { EditProductData } from "@/types";

// Custom hooks
import { useToast } from "@/hooks";

// Constants
import { EDIT_PRODUCT_MESSAGE } from "@/constants";

const EditProductForm = ({
  productData,
  id,
}: {
  productData: EditProductData;
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
  } = productData;

  const router = useRouter();
  const [isDisableButton, setIsDisableButton] = useState(false);
  const { isOpenToast, handleCloseToast, handleOpenToast } = useToast();
  const formHandler = useForm<EditProductData>({
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
    },
  });

  const { handleSubmit } = formHandler;

  const onSubmit = async (data: EditProductData) => {
    try {
      setIsDisableButton(true);
      const convertedTagsValue = data.tags.map(value => {
        return Number(value);
      });

      const newData = {
        ...data,
        category: +data.category,
        currency: +data.currency,
        tags: convertedTagsValue,
      };

      await editProduct(id, newData);

      handleOpenToast();
      setIsDisableButton(false);
      router.refresh();
    } catch (err: any) {
      throw new Error("Failed to edit product!");
    }
  };

  return (
    <>
      {isOpenToast && (
        <div className="flex justify-center fixed right-5 top-5">
          <Toast
            icon={<FaCheckCircle />}
            message={EDIT_PRODUCT_MESSAGE.SUCCESS}
            onClose={handleCloseToast}
          />
        </div>
      )}
      <FormProvider {...formHandler}>
        <form onSubmit={handleSubmit(onSubmit)} className="relative">
          <div className="w-full text-end absolute -mt-24">
            <Button
              type="submit"
              className="antialiased text-center uppercase px-6 py-2.5 bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary rounded-lg border-0 hover:!shadow-btn-primary-hover items-end"
              size="xs"
              disabled={isDisableButton}>
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
                image={image}
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
    </>
  );
};

export default EditProductForm;
