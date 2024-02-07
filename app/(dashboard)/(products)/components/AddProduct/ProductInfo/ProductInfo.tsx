"use client";

// Libs
import dynamic from "next/dynamic";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import { Text } from "@tremor/react";
import InputField from "@/components/common/CustomField/InputField/InputField";
import SelectField from "@/components/common/CustomField/SelectField/SelectField";

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
      <p className="text-sm font-semibold text-[#7b809a] dark:text-white">
        Loading Quill Editor ...
      </p>
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
            <InputField
              type="text"
              isLabelTransform={true}
              label="Name"
              {...field}
            />
            <p className="product-info-err-msg">{errorNameMsg}</p>
          </div>
        )}
      />

      {/* Prevent input e, E, +, - to weight field */}
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <InputField
            type="number"
            label="Weight"
            isLabelTransform={true}
            {...field}
            onKeyDown={handleWeightKeyDown}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <div className="w-full flex flex-col h-48">
            <Text className="text-secondary dark:text-lighter mb-2">
              Description <span className="text-xs">(optional)</span>
            </Text>
            <QuillEditor
              theme="snow"
              placeholder="Some initial bold text"
              className="mt-2 dark:text-white"
              {...field}
            />
          </div>
        )}
      />

      <div className="flex flex-col gap-6">
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <div>
              <h3 className="text-tremor-default text-secondary dark:text-white">
                Category
              </h3>
              <SelectField options={CATEGORY_PRODUCT} {...field} />
            </div>
          )}
        />

        <Controller
          name="quantity"
          control={control}
          render={({ field }) => (
            <InputField
              type="number"
              isLabelTransform={true}
              label="Quantity"
              onKeyDown={handleQuantityKeyDown}
              {...field}
            />
          )}
        />

        <Controller
          name="providerName"
          control={control}
          render={({ field }) => (
            <InputField
              type="text"
              label="Provider Name"
              isLabelTransform={true}
              {...field}
            />
          )}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
