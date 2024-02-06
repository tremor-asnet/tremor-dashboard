"use client";

import dynamic from "next/dynamic";

// Libs
import { Controller, useFormContext } from "react-hook-form";

// Components
import {
  Text,
  Flex,
  Card,
  TextInput,
  Select,
  SelectItem,
  NumberInput,
} from "@tremor/react";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

// Constants
import {
  MESSAGES_ERROR,
  CATEGORY_PRODUCT,
  NUMBER_REGEX_WITHOUT_0,
  DECIMAL_REGEX,
} from "@/constants";

// Types
import { SelectOptionData } from "@/types";

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
              <div className="w-full">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Name
                </Text>
                <TextInput
                  id="name"
                  placeholder="Name"
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                  autoFocus
                  {...field}
                />
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
        <Flex flexDirection="col">
          <Controller
            control={control}
            rules={{
              pattern: { value: DECIMAL_REGEX, message: "Invalid weight" },
            }}
            render={({ field: { value, onChange } }) => (
              <div className="w-full mb-4">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Weight
                </Text>
                <NumberInput
                  enableStepper={false}
                  onValueChange={onChange}
                  value={value || 0}
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
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
            render={({ field: { onChange, value } }) => (
              <div className="w-full mb-4">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Quantity
                </Text>
                <NumberInput
                  enableStepper={false}
                  onValueChange={onChange}
                  value={value || 0}
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
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
            render={({ field: { value, onChange } }) => (
              <div className="w-full mb-4">
                <Text className="text-secondary mb-3 dark:text-lighter mb-2">
                  Category
                </Text>
                <Select
                  placeholder="Clothing"
                  className="select-custom dark:text-white dark:border-light dark:focus:border-white"
                  value={value.toString()}
                  onValueChange={onChange}>
                  {CATEGORY_PRODUCT.map((item: SelectOptionData) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.option}
                    </SelectItem>
                  ))}
                </Select>
              </div>
            )}
            name="category"
          />

          <Controller
            control={control}
            render={({ field }) => (
              <div className="w-full">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Prodvider Name
                </Text>
                <TextInput
                  id="provider-name"
                  placeholder="Provider Name"
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
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
