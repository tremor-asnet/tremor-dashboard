"use client";

// Libs
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import dynamic from "next/dynamic";

// Components
import {
  TextInput,
  Button,
  Text,
  Flex,
  Select,
  SelectItem,
} from "@tremor/react";

// Constants
import { MESSAGES_ERROR } from "@/constants";

// Types
import { TProductInfo } from "@/types";

// Styles
import "@/styles/form.css";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const ProductInfo = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TProductInfo>({
    defaultValues: {
      name: "",
      description: "",
      weight: "",
      category: "",
      size: "",
    },
    mode: "onSubmit",
  });

  const [formStatus, setFormStatus] = useState({
    isPending: false,
    errorMessage: "",
  });

  const { name } = errors || {};
  const nameErrorMessage = name?.message?.toString() || "";
  const isDisableSubmit = formStatus.isPending;

  const handleNext = () => {
    setFormStatus({
      isPending: false,
      errorMessage: nameErrorMessage,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleNext)}
      className="w-full p-2 sm:p-4 bg-white dark:bg-dark-tremor-primary rounded-lg w-[67%] shadow-box-icon-default">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Product Infomation
      </Text>
      <Flex className="flex-col items-end">
        <Flex className="items-start">
          <Flex className="flex-col">
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
                <div className="h-[70px] w-full min-w-[290px]">
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
              name="name"
            />
            <Flex className="flex-col">
              <Flex className="justify-start mb-3">
                <Text className="text-secondary dark:text-white">
                  Description
                </Text>
                <Text className="text-xs ml-1 dark:text-white">(Optional)</Text>
              </Flex>
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="w-full min-w-[290px]">
                    <QuillEditor
                      placeholder="Content goes here..."
                      className="w-full rounded-md dark:text-white"
                      {...field}
                    />
                  </div>
                )}
                name="description"
              />
            </Flex>
          </Flex>
          <Flex className="ml-6 flex-col">
            <Controller
              control={control}
              render={({ field }) => (
                <div className="h-[70px] w-full min-w-[290px]">
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
            <Flex className="flex-col items-start">
              <Text className="text-secondary mb-3 dark:text-white">
                Category
              </Text>
              <Controller
                control={control}
                render={() => (
                  <div className="h-[70px] w-full">
                    <Select
                      placeholder="Clothing"
                      className="select-custtom dark:text-white dark:border-light dark:focus:border-white">
                      <SelectItem value="1">Clothing</SelectItem>
                      <SelectItem value="2">Electronics</SelectItem>
                      <SelectItem value="3">Furniture</SelectItem>
                      <SelectItem value="4">Others</SelectItem>
                      <SelectItem value="5">Real Estate</SelectItem>
                    </Select>
                  </div>
                )}
                name="category"
              />
            </Flex>
            <Flex className="flex-col items-start">
              <Text className="text-secondary mb-3 dark:text-white">Size</Text>
              <Controller
                control={control}
                render={() => (
                  <div className="h-[70px] w-full min-w-[290px]">
                    <Select
                      placeholder="Small"
                      className="select-custtom dark:text-white dark:bg-transparent">
                      <SelectItem value="1">Extra Large</SelectItem>
                      <SelectItem value="2">Extra Small</SelectItem>
                      <SelectItem value="3">Large</SelectItem>
                      <SelectItem value="4">Medium</SelectItem>
                      <SelectItem value="5">Small</SelectItem>
                    </Select>
                  </div>
                )}
                name="size"
              />
            </Flex>
          </Flex>
        </Flex>
        <Button
          aria-disabled={isDisableSubmit}
          type="submit"
          className="antialiased min-w-[80px] py-[12px] text-center uppercase sm:px-[21px] bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary px-6 py-2.5 rounded-lg border-0 hover:!shadow-btn-primary-hover"
          size="xs"
          disabled={isDisableSubmit}>
          <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
            Next
          </Text>
        </Button>
      </Flex>
    </form>
  );
};

export default ProductInfo;
