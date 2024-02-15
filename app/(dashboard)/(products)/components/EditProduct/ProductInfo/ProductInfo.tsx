"use client";

import dynamic from "next/dynamic";
import { KeyboardEvent } from "react";

// Libs
import { Controller, useFormContext } from "react-hook-form";

// Components
import { Text, Flex, Card } from "@tremor/react";
import { SelectField, InputField } from "@/components";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

// Constants
import {
  MESSAGES_ERROR,
  CATEGORY_PRODUCT,
  NUMBER_REGEX_WITHOUT_0,
  DECIMAL_REGEX,
} from "@/constants";
import { EXCEPT_KEYS } from "@/constants/common";

// Styles
import "@/styles/form.css";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const ProductInfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { productName, weight, quantity } = errors || {};
  const nameErrorMessage = productName?.message?.toString() || "";
  const weightErrorMessage = weight?.message?.toString() || "";
  const quantityErrorMessage = quantity?.message?.toString();

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    EXCEPT_KEYS.POSITIVE_DOUBLE.includes(e.key) && e.preventDefault();
  };

  return (
    <Card className="w-full dark:bg-dark-tremor-primary rounded-lg shadow-box-icon-default ring-0">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </Text>

      <Flex flexDirection="col" className="md:flex-row items-start gap-6">
        <Flex flexDirection="col" className="gap-4">
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
              <div className="w-full mb-4">
                <InputField id="edit-name" label="Name" {...field} />
                {nameErrorMessage && (
                  <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                    {nameErrorMessage}
                  </p>
                )}
              </div>
            )}
            name="productName"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Description <span className="text-xs">(optional)</span>
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
        <Flex flexDirection="col" className="gap-6">
          <Controller
            control={control}
            rules={{
              pattern: { value: DECIMAL_REGEX, message: "Invalid weight" },
            }}
            render={({ field }) => (
              <div className="w-full mb-4">
                <InputField
                  id="edit-weight"
                  type="number"
                  label="Weight"
                  {...field}
                  onKeyDown={handleOnKeyDown}
                />
                {weightErrorMessage && (
                  <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                    {weightErrorMessage}
                  </p>
                )}
              </div>
            )}
            name="weight"
          />

          <Controller
            control={control}
            rules={{
              pattern: {
                value: NUMBER_REGEX_WITHOUT_0,
                message: "Invalid quantity number",
              },
            }}
            render={({ field }) => (
              <div className="w-full mb-4">
                <InputField
                  id="edit-quantity"
                  type="number"
                  label="Quantity"
                  onKeyDown={handleOnKeyDown}
                  {...field}
                />
                {quantityErrorMessage && (
                  <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                    {quantityErrorMessage}
                  </p>
                )}
              </div>
            )}
            name="quantity"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full mb-4">
                <SelectField
                  label="Category"
                  options={CATEGORY_PRODUCT}
                  {...field}
                />
              </div>
            )}
            name="category"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full mb-4">
                <InputField
                  id="edit-provider"
                  label="Provider Name"
                  {...field}
                />
              </div>
            )}
            name="providerName"
          />
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductInfo;
