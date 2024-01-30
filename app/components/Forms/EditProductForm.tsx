"use client";
import dynamic from "next/dynamic";

// Components
import { Button, Col, Grid, Text } from "@tremor/react";
import { FormProvider, useForm } from "react-hook-form";
import { editProduct } from "@/services";
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

export interface EditProductData {
  productName: string;
  price: string;
  tags: string[];
  shopifyUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  quantity: string;
  weight: string;
  category: string;
  description: string;
  image: string;
  currency: string;
  sku: string;
}

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
    console.log(data);
    await editProduct(id, data);
    // alert("Editted!");
  };

  return (
    <FormProvider {...formHandler}>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="w-full text-end absolute -mt-24">
          <Button
            type="submit"
            className="antialiased text-center uppercase px-6 py-2.5 bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary rounded-lg border-0 hover:!shadow-btn-primary-hover items-end"
            size="xs">
            <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
              Save
            </Text>
          </Button>
        </div>
        <Grid numItemsSm={1} numItemsLg={3} className="gap-2 lg:gap-4">
          <div className="w-full">
            <ProductImage name={productName} desc={description} image={image} />
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
  );
};

export default EditProductForm;
