"use client";

import dynamic from "next/dynamic";

// Libs
import { useForm, Controller } from "react-hook-form";

// Components
import { Text, Flex, Card } from "@tremor/react";
import { TextField, SelectField } from "@/components";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

// Constants
import { MESSAGES_ERROR, CATEGORY_PRODUCT, COLOR_PRODUCT } from "@/constants";

// Types
import { TProductInfo, SelectOptionData } from "@/types";

// Styles
import "@/styles/form.css";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

interface ProductInfoData {
  productName?: string;
  description?: string;
  weight?: string;
  category?: string;
  quantity?: string;
  isEdit?: boolean;
  collection?: string;
  price?: string;
  color?: string;
}

const ProductInfo = ({
  productName,
  description,
  weight,
  category,
  quantity,
  isEdit = false,
  collection,
  price,
  color,
}: ProductInfoData) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TProductInfo>({
    defaultValues: {
      name: productName,
      description: description,
      weight: weight,
      category: category,
      quantity: quantity,
      collection: collection,
      price: price,
      color: color,
    },
    mode: "onSubmit",
  });

  const { name } = errors || {};
  const nameErrorMessage = name?.message?.toString() || "";

  const handleNext = () => {
    //TODO handle to check submit form with next button
  };

  return (
    <Card className="w-full dark:bg-dark-tremor-primary rounded-lg shadow-box-icon-default ring-0">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </Text>
      <form onSubmit={handleSubmit(handleNext)} className="product-info">
        <Flex flexDirection="col" className="items-start gap-6 md:flex-row">
          <Flex flexDirection="col" className="gap-6">
            <Controller
              control={control}
              rules={{
                required: MESSAGES_ERROR.NAME_REQUIRED,
                minLength: {
                  value: 4,
                  message: MESSAGES_ERROR.NAME_MIN_LENGTH,
                },
              }}
              render={({ field }) => (
                <div className="w-full mb-2">
                  <TextField
                    id="name"
                    label="Name"
                    placeholder="Name"
                    autoFocus={true}
                    required={true}
                    value={field.value}
                  />
                  {nameErrorMessage && (
                    <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                      {nameErrorMessage}
                    </p>
                  )}
                </div>
              )}
              name="name"
            />
            {isEdit && (
              <Flex className="mb-4 gap-4">
                <Controller
                  control={control}
                  render={({ field }) => (
                    <div className="w-full">
                      <TextField
                        id="collection"
                        label="Collection"
                        placeholder="Summer"
                        value={field.value}
                      />
                    </div>
                  )}
                  name="collection"
                />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <div className="w-full">
                      <TextField
                        id="price"
                        label="Price"
                        placeholder="$90"
                        value={field.value}
                      />
                    </div>
                  )}
                  name="price"
                />
              </Flex>
            )}
            <Controller
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <Text className="text-secondary dark:text-lighter mb-2">
                    Description &#x276A;optional&#x276B;
                  </Text>
                  <QuillEditor
                    placeholder="Content goes here..."
                    className="w-full rounded-md text-secondary dark:text-white"
                    {...field}
                  />
                </div>
              )}
              name="description"
            />
          </Flex>
          <Flex flexDirection="col">
            <Controller
              control={control}
              render={({ field }) => (
                <div className="w-full mb-6">
                  <TextField
                    id="weight"
                    label="Weight"
                    placeholder="Weight"
                    value={field.value}
                  />
                </div>
              )}
              name="weight"
            />

            <Controller
              control={control}
              render={({ field }) => (
                <div className="w-full mb-8">
                  <TextField
                    id="quantity"
                    label="Quantity"
                    placeholder="Quantity"
                    value={field.value}
                  />
                </div>
              )}
              name="quantity"
            />

            <Controller
              control={control}
              render={() => (
                <div className="w-full mb-7">
                  <SelectField
                    id="category"
                    label="Category"
                    placeholder="Clothing"
                    selectData={CATEGORY_PRODUCT}
                  />
                </div>
              )}
              name="category"
            />
            {isEdit && (
              <Controller
                control={control}
                render={() => (
                  <div className="w-full mb-4">
                    <SelectField
                      id="color"
                      label="Color"
                      placeholder="Black"
                      selectData={COLOR_PRODUCT}
                    />
                  </div>
                )}
                name="color"
              />
            )}
          </Flex>
        </Flex>
      </form>
    </Card>
  );
};

export default ProductInfo;
