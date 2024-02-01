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
  NUMBER_REGEX,
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
  const { name } = errors || {};
  const nameErrorMessage = name?.message?.toString() || "";

  return (
    <Card className="w-full dark:bg-dark-tremor-primary rounded-lg shadow-box-icon-default ring-0">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Information
      </Text>

      <Flex className="items-start gap-5">
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
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                  autoFocus
                  required
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
            render={({ field }) => (
              <div className="w-full mb-4">
                <Text className="text-secondary dark:text-lighter mb-2">
                  Weight
                </Text>
                <TextInput
                  id="weight"
                  placeholder="Weight"
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                  {...field}
                />
              </div>
            )}
            name="weight"
          />

          <Controller
            control={control}
            rules={{
              pattern: {
                value: NUMBER_REGEX,
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
                  value={value}
                  className="py-1 w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                />
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
        </Flex>
      </Flex>
    </Card>
  );
};

export default ProductInfo;
