"use client";

// Libs
import dynamic from "next/dynamic";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import InputField from "@/components/common/CustomField/InputField/InputField";
import SelectField from "@/components/common/CustomField/SelectField/SelectField";

// Constants
import { CATEGORY_PRODUCT, MESSAGES_ERROR } from "@/constants";

// Types
import { NewInfo } from "@/types";

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

interface ProductInfoProps {
  control: Control<NewInfo>;
  errors: FieldErrors<NewInfo>;
}

const ProductInfo = ({ control, errors }: ProductInfoProps) => {
  const errorNameMsg = errors.productName?.message;

  const handleWeightKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  };

  const handleQuantityKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
            <InputField type="text" label="Name" {...field} />
            <p className="product-info-err-msg">{errorNameMsg}</p>
          </div>
        )}
      />

      {/* Prevent input e, E, +, - to weight field */}
      <Controller
        name="weight"
        control={control}
        render={({ field }) => (
          <div>
            <InputField
              type="number"
              label="Weight"
              {...field}
              onKeyDown={handleWeightKeyDown}
            />
          </div>
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <div className="w-full">
            <h3 className="text-sm text-[#7b809a] dark:text-white">
              Description{" "}
              <span className="text-xs">&#x276A;optional&#x276B;</span>
            </h3>
            <QuillEditor
              placeholder="Content goes here..."
              className="mt-1 rounded-md text-secondary dark:text-white"
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
              <h3 className="text-xs text-[#7b809a] dark:text-white">
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
            <div>
              <InputField
                type="number"
                label="Quantity"
                onKeyDown={handleQuantityKeyDown}
                {...field}
              />
            </div>
          )}
        />

        <Controller
          name="providerName"
          control={control}
          render={({ field }) => (
            <div>
              <InputField type="text" label="Provider Name" {...field} />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
