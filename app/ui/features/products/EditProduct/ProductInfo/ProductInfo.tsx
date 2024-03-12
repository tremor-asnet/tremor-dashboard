"use client";

import dynamic from "next/dynamic";
import { KeyboardEvent } from "react";

// Libs
import { Controller, useFormContext } from "react-hook-form";

// Components
import { Text, Flex, Card } from "@tremor/react";
import { InputField, SelectField } from "@/ui/components";
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

// Hooks
import useFocusFieldError from "@/hooks/useFocusFieldError";

const ProductInfo = () => {
  const { control, formState } = useFormContext();

  useFocusFieldError(formState);

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    EXCEPT_KEYS.POSITIVE_DOUBLE.includes(e.key) && e.preventDefault();
  };

  return (
    <Card className="w-full dark:bg-dark-tremor-primary rounded-lg shadow-box-icon-default ring-0">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </Text>

      <Flex
        flexDirection="col"
        alignItems="start"
        className="md:flex-row gap-6">
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
            render={({ field, formState: { errors } }) => {
              const productNameErrorMessage = errors.productName?.message || "";

              return (
                <div className="w-full mb-4">
                  <InputField
                    id="edit-name"
                    label="Name"
                    errorMessage={productNameErrorMessage}
                    {...field}
                  />
                </div>
              );
            }}
            name="productName"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <Text className="text-secondary text-sm dark:text-lighter">
                  Description <span className="text-xs">(optional)</span>
                </Text>
                <QuillEditor
                  placeholder="Content goes here..."
                  className="w-full rounded-md text-secondary dark:text-white pt-2.5"
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
              required: MESSAGES_ERROR.FIELD_REQUIRED,
              pattern: { value: DECIMAL_REGEX, message: "Invalid weight" },
            }}
            render={({ field, formState: { errors } }) => {
              const weightErrorMessage = errors.weight?.message || "";

              return (
                <div className="w-full mb-1">
                  <InputField
                    id="edit-weight"
                    type="number"
                    label="Weight"
                    errorMessage={weightErrorMessage}
                    onKeyDown={handleOnKeyDown}
                    {...field}
                  />
                </div>
              );
            }}
            name="weight"
          />

          <Controller
            control={control}
            rules={{
              required: MESSAGES_ERROR.FIELD_REQUIRED,
              pattern: {
                value: NUMBER_REGEX_WITHOUT_0,
                message: "Invalid quantity number",
              },
            }}
            render={({ field, formState: { errors } }) => {
              const quantityErrorMessage = errors.quantity?.message || "";

              return (
                <div className="w-full mb-2">
                  <InputField
                    id="edit-quantity"
                    type="number"
                    label="Quantity"
                    errorMessage={quantityErrorMessage}
                    onKeyDown={handleOnKeyDown}
                    {...field}
                  />
                </div>
              );
            }}
            name="quantity"
          />

          <Controller
            name="category"
            control={control}
            render={({ field: { value, onChange } }) => {
              const convertedValue = value.toString();
              return (
                <div className="w-full mb-2">
                  <SelectField
                    label="Category"
                    options={CATEGORY_PRODUCT}
                    value={convertedValue}
                    onChange={onChange}
                    className="py-2.5"
                  />
                </div>
              );
            }}
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full mb-2">
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
