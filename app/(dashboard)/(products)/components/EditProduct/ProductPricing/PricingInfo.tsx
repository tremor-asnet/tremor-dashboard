"use client";

// Libs
import { Controller, useFormContext } from "react-hook-form";

// Components
import { Text, Flex, MultiSelect, MultiSelectItem } from "@tremor/react";
import { SelectField, TextField } from "@/components";

// Types
import { SelectOptionData } from "@/types";

// Constants
import {
  TYPE_PRICE,
  TAGS_PRICE,
  DECIMAL_REGEX,
  NUMBER_REGEX,
} from "@/constants";

// Styles
import "@/styles/form.css";

const PricingInfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { price, sku } = errors || {};
  const priceErrorMessage = price?.message?.toString() || "";
  const skuErrorMessage = sku?.message?.toString() || "";

  return (
    <div className="w-full p-4 bg-white dark:bg-dark-tremor-primary rounded-lg w-[67%] shadow-box-icon-default pricing-info">
      <Text className="text-primary dark:text-white font-bold text-xl mb-8">
        Pricing
      </Text>
      <Flex className="flex-col items-end">
        <Flex className="items-start flex-col sm:flex-row">
          <Flex className="flex-col">
            <Flex className="flex-col sm:flex-row">
              <Controller
                control={control}
                rules={{
                  pattern: { value: DECIMAL_REGEX, message: "Invalid price" },
                }}
                render={({ field }) => (
                  <div className="h-[70px] w-full md:max-w-[25%]">
                    <TextField
                      id="price"
                      label="Price"
                      placeholder="Price"
                      required={true}
                      {...field}
                    />
                    {priceErrorMessage && (
                      <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                        {priceErrorMessage}
                      </p>
                    )}
                  </div>
                )}
                name="price"
              />
              <Controller
                control={control}
                render={({ field: { value, onChange } }) => (
                  <div className="h-[70px] mx-6 w-full md:max-w-[30%]">
                    <SelectField
                      id="usd"
                      placeholder="USD"
                      options={TYPE_PRICE}
                      onChange={onChange}
                      value={value.toString()}
                    />
                  </div>
                )}
                name="currency"
              />
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: NUMBER_REGEX,
                    message: "Invalid SKU number",
                  },
                }}
                render={({ field }) => (
                  <div className="h-[70px] w-full">
                    <TextField
                      id="sku"
                      label="SKU"
                      placeholder="SKU"
                      required={true}
                      {...field}
                    />
                    {skuErrorMessage && (
                      <p className="pt-1 text-[11px] xs:text-xs text-red-500">
                        {skuErrorMessage}
                      </p>
                    )}
                  </div>
                )}
                name="sku"
              />
            </Flex>

            <Controller
              control={control}
              render={({ field: { value, onChange } }) => {
                const convertedValue = value.map(String);
                return (
                  <div className="w-full mb-4 mt-6">
                    <Text className="text-secondary dark:text-white">Tags</Text>
                    <MultiSelect
                      className="select-custom dark:text-white dark:border-light dark:focus:border-white"
                      value={convertedValue}
                      onValueChange={onChange}>
                      {TAGS_PRICE.map((item: SelectOptionData) => (
                        <MultiSelectItem key={item.value} value={item.value}>
                          {item.option}
                        </MultiSelectItem>
                      ))}
                    </MultiSelect>
                  </div>
                );
              }}
              name="tags"
            />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default PricingInfo;
