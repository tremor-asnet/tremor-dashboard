"use client";

// Libs
import { Controller, useFormContext } from "react-hook-form";

// Components
import { Text, Flex, MultiSelect, MultiSelectItem } from "@tremor/react";
import { TextField } from "@/components";
import SelectField from "@/components/common/CustomField/SelectField/SelectField";

// Types
import { SelectOptionData } from "@/types";

// Constants
import {
  TYPE_PRICE,
  TAGS_PRICE,
  PRODUCT_TAGS,
  DECIMAL_REGEX,
  NUMBER_REGEX,
} from "@/constants";

// Styles
import "@/styles/form.css";

const PricingInfo = () => {
  const { control } = useFormContext();

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
                  <div className="h-[70px] w-full md:max-w-[25%] mt-6">
                    <TextField
                      id="price"
                      label="Price"
                      placeholder="Price"
                      autoFocus={true}
                      required={true}
                      {...field}
                    />
                  </div>
                )}
                name="price"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="h-[70px] mx-6 w-full md:max-w-[30%] mt-6 pt-5">
                    <SelectField options={TYPE_PRICE} {...field} />
                  </div>
                )}
                name="currency"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="h-[70px] w-full mt-6">
                    <TextField
                      id="sku"
                      label="SKU"
                      placeholder="SKU"
                      autoFocus={true}
                      required={true}
                      {...field}
                    />
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
