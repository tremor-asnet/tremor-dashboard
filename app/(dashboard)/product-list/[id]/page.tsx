"use client";

import dynamic from "next/dynamic";

// Components
import { Button, Col, Flex, Grid, Text, Title } from "@tremor/react";
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

// Mocks
import {
  mockPricingInfo,
  mockProductImage,
  mockProductInfo,
  mockProductSocial,
} from "@/mocks";

const EditProduct = () => {
  const handleSubmit = () => {
    // TODO: handle submit edit form
  };

  return (
    <>
      <Flex className="mb-16">
        <div>
          <Text className="font-bold text-primary mb-3 !text-2xl ">
            Make the changes below
          </Text>
          <Text className="dark:text-dark-romance !text-base">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Text>
        </div>
        <Button
          type="submit"
          className="antialiased text-center uppercase px-6 py-2.5 bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary rounded-lg border-0 hover:!shadow-btn-primary-hover"
          size="xs">
          <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
            Save
          </Text>
        </Button>
      </Flex>
      <form onSubmit={handleSubmit}>
        <Grid numItemsSm={1} numItemsLg={3} className="gap-6">
          <div className="w-full">
            <ProductImage {...mockProductImage} />
          </div>
          <Col numColSpanSm={1} numColSpanLg={2}>
            <ProductInfo {...mockProductInfo} />
          </Col>
          <Col numColSpan={1}>
            <Socials {...mockProductSocial} />
          </Col>
          <Col numColSpanSm={1} numColSpanLg={2}>
            <PricingInfo {...mockPricingInfo} />
          </Col>
        </Grid>
      </form>
    </>
  );
};

export default EditProduct;
