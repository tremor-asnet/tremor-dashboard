"use client";

// Libs
import dynamic from "next/dynamic";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import { Text } from "@tremor/react";
import { InputField, SelectField } from "@/ui/components";

// Constants
import { CATEGORY_PRODUCT, MESSAGES_ERROR } from "@/constants";
import { EXCEPT_KEYS } from "@/constants/common";

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
  errors: FieldErrors<NewInfo>;
}

const ProductInfo = ({ control, errors }: ProductInfoProps) => {
  const errorNameMsg = errors.productName?.message;

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
          minLength: {
            value: 4,
            message: MESSAGES_ERROR.MIN_LENGTH_4,
          },
        }}
        render={({ field }) => (
          <div>
            <InputField id="add-product-name" label="Name" {...field} />
            <Text className="pt-1 text-xs text-red-500 dark:text-red-500">
              {errorNameMsg}
            </Text>
          </div>
        )}
      />

      {/* Prevent input e, E, +, - to weight field */}
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <InputField
            id="add-product-weight"
            type="number"
            label="Weight"
            {...field}
            onKeyDown={handleWeightKeyDown}
          />
        )}
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
            render={({ field }) => (
              <InputField
                id="add-product-quantity"
                type="number"
                label="Quantity"
                onKeyDown={handleQuantityKeyDown}
                {...field}
              />
            )}
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
