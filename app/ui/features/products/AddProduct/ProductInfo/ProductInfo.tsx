"use client";

// Libs
import dynamic from "next/dynamic";
import { Control, Controller } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import { Text } from "@tremor/react";
import { InputField, SelectField } from "@/ui/components";

// Constants
import {
  CATEGORY_PRODUCT,
  EXCEPT_KEYS,
  MESSAGES_ERROR,
  PRODUCT_NAME_REGEX,
} from "@/constants";

// Types
import { NewInfo } from "@/types";

// Css
import "@/styles/form.css";
import "react-quill/dist/quill.snow.css";
import "@/styles/quill.css";

const QuillEditor = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-44 w-full">
      <Text className="font-semibold text-secondary dark:text-white">
        Loading Quill Editor ...
      </Text>
    </div>
  ),
});

interface ProductInfoProps {
  control: Control<NewInfo>;
}

const ProductInfo = ({ control }: ProductInfoProps) => {
  const handleWeightKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    EXCEPT_KEYS.POSITIVE_DOUBLE.includes(e.key) && e.preventDefault();
  };

  const handleQuantityKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
      <Controller
        name="productName"
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
          pattern: {
            value: PRODUCT_NAME_REGEX,
            message: MESSAGES_ERROR.INVALID_PRODUCT_NAME,
          },
          minLength: {
            value: 4,
            message: MESSAGES_ERROR.MIN_LENGTH_4,
          },
        }}
        render={({ field, formState: { errors } }) => {
          const errorNameMessage = errors.productName?.message;

          return (
            <InputField
              id="add-product-name"
              label="Name"
              errorMessage={errorNameMessage}
              {...field}
            />
          );
        }}
      />

      {/* Prevent input e, E, +, - to weight field */}
      <Controller
        name="weight"
        control={control}
        rules={{
          required: MESSAGES_ERROR.FIELD_REQUIRED,
          min: {
            value: 0,
            message: MESSAGES_ERROR.NEGATIVE_NUMBER,
          },
        }}
        render={({ field, formState: { errors } }) => {
          const errorWeightMessage = errors.weight?.message;

          return (
            <InputField
              id="add-product-weight"
              type="number"
              label="Weight"
              errorMessage={errorWeightMessage}
              {...field}
              onKeyDown={handleWeightKeyDown}
            />
          );
        }}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <div className="w-full">
            <Text className="text-secondary text-sm dark:text-lighter">
              Description <span className="text-xs">(optional)</span>
            </Text>
            <QuillEditor
              theme="snow"
              placeholder="Some initial bold text"
              className="mt-3 dark:text-white"
              {...field}
            />
          </div>
        )}
      />

      <div className="flex flex-col gap-6">
        <div className="mb-2">
          <Controller
            name="category"
            control={control}
            render={({ field: { value, onChange } }) => {
              const convertedValue = value.toString();

              return (
                <SelectField
                  label="Category"
                  options={CATEGORY_PRODUCT}
                  value={convertedValue}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>

        <div className="mb-2">
          <Controller
            name="quantity"
            control={control}
            rules={{
              required: MESSAGES_ERROR.FIELD_REQUIRED,
              min: {
                value: 0,
                message: MESSAGES_ERROR.NEGATIVE_NUMBER,
              },
            }}
            render={({ field, formState: { errors } }) => {
              const errorQuantityMessage = errors.quantity?.message;

              return (
                <InputField
                  id="add-product-quantity"
                  type="number"
                  label="Quantity"
                  errorMessage={errorQuantityMessage}
                  onKeyDown={handleQuantityKeyDown}
                  {...field}
                />
              );
            }}
          />
        </div>

        <div className="mb-2">
          <Controller
            name="providerName"
            control={control}
            render={({ field }) => (
              <InputField
                id="add-product-provider"
                label="Provider Name"
                {...field}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
