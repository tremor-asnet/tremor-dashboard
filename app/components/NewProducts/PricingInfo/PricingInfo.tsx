"use client";

// Libs
import { useForm, Controller } from "react-hook-form";

// Components
import {
  TextInput,
  Button,
  Text,
  Flex,
  Select,
  SelectItem,
  MultiSelect,
  MultiSelectItem,
} from "@tremor/react";

// Types
import { TPricingInfo, SelectOptionData } from "@/types";

// Constants
import { TYPE_PRICE, TAGS_PRICE } from "@/constants";

// Styles
import "@/styles/form.css";

const PricingInfo = () => {
  const { control, handleSubmit } = useForm<TPricingInfo>({
    defaultValues: {
      price: "",
      type: "",
      sku: "",
      tags: [""],
    },
    mode: "onSubmit",
  });

  const handleSend = () => {
    //TODO handle to check submit form with send button
  };

  return (
    <form
      onSubmit={handleSubmit(handleSend)}
      className="w-full p-4 bg-white dark:bg-dark-tremor-primary rounded-lg w-[67%] shadow-box-icon-default">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Pricing
      </Text>
      <Flex className="flex-col items-end">
        <Flex className="items-start flex-col sm:flex-row">
          <Flex className="flex-col">
            <Flex className="flex-col sm:flex-row">
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="h-[70px] w-full md:max-w-[25%]">
                    <TextInput
                      id="price"
                      required
                      placeholder="Price"
                      className="w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                      {...field}
                    />
                  </div>
                )}
                name="price"
              />
              <Controller
                control={control}
                render={() => (
                  <div className="h-[70px] mx-6 w-full md:max-w-[30%]">
                    <Select
                      placeholder="USD"
                      className="select-custom dark:text-white dark:border-light dark:focus:border-white">
                      {TYPE_PRICE.map((item: SelectOptionData) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.option}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}
                name="type"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="h-[70px] w-full">
                    <TextInput
                      id="sku"
                      placeholder="SKU"
                      className="w-full dark:text-white hover:bg-transparent bg-transparent dark:bg-transparent focus:bg-transparent rounded-b-none border-l-0 border-r-0 border-t-0 border-b-1 focus:border-b-2 focus:outline-none focus:border-tremor-brand-subtle dark:border-light dark:focus:border-white shadow-none hover:bg-transparent ring-0"
                      {...field}
                    />
                  </div>
                )}
                name="sku"
              />
            </Flex>
            <Flex className="flex-col items-start">
              <Text className="text-secondary mb-3 dark:text-white">Tags</Text>
              <Controller
                control={control}
                render={() => (
                  <div className="h-[70px] w-full">
                    <MultiSelect
                      defaultValue={["In Stock", "Out of Stock"]}
                      className="select-custom dark:text-white dark:border-light dark:focus:border-white">
                      {TAGS_PRICE.map((item: SelectOptionData) => (
                        <MultiSelectItem key={item.value} value={item.value}>
                          {item.option}
                        </MultiSelectItem>
                      ))}
                    </MultiSelect>
                  </div>
                )}
                name="tags"
              />
            </Flex>
          </Flex>
        </Flex>
        <Button
          type="submit"
          className="antialiased min-w-[80px] py-[12px] text-center uppercase sm:px-[21px] bg-gradient-primary dark:bg-gradient-pickled !shadow-btn-primary px-6 py-2.5 rounded-lg border-0 hover:!shadow-btn-primary-hover"
          size="xs">
          <Text className="items-center uppercase py-[2px] text-xs font-bold font-primary text-white dark:text-dark-tremor-content-title">
            Send
          </Text>
        </Button>
      </Flex>
    </form>
  );
};

export default PricingInfo;
