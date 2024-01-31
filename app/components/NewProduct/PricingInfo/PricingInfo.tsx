"use client";

// Libs
import { useForm, Controller } from "react-hook-form";

// Components
import { Text, Flex, MultiSelect, MultiSelectItem } from "@tremor/react";
import { SelectField, TextField } from "@/components";

// Types
import { TPricingInfo, SelectOptionData } from "@/types";

// Constants
import { TYPE_PRICE, TAGS_PRICE, PRODUCT_TAGS } from "@/constants";

// Styles
import "@/styles/form.css";

interface PricingInfoData {
  price?: string;
  type?: string;
  sku?: string;
  tags?: string[];
}

const PricingInfo = ({ price, type, sku, tags }: PricingInfoData) => {
  const { control, handleSubmit } = useForm<TPricingInfo>({
    defaultValues: {
      price,
      type,
      sku,
      tags,
    },
    mode: "onSubmit",
  });

  const handleSend = () => {
    //TODO handle to check submit form with send button
  };

  return (
    <form
      onSubmit={handleSubmit(handleSend)}
      className="w-full p-4 bg-white dark:bg-dark-tremor-primary rounded-lg w-[67%] shadow-box-icon-default pricing-info">
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
                render={() => (
                  <div className="h-[70px] mx-6 w-full md:max-w-[30%]">
                    <SelectField
                      id="usd"
                      placeholder="USD"
                      selectData={TYPE_PRICE}
                    />
                  </div>
                )}
                name="type"
              />
              <Controller
                control={control}
                render={({ field }) => (
                  <div className="h-[70px] w-full">
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
              render={() => (
                <div className="w-full mb-4 mt-6">
                  <Text className="text-secondary dark:text-white">Tags</Text>
                  <MultiSelect
                    defaultValue={[
                      PRODUCT_TAGS.IN_STOCK,
                      PRODUCT_TAGS.OUT_OF_STOCK,
                    ]}
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
    </form>
  );
};

export default PricingInfo;
