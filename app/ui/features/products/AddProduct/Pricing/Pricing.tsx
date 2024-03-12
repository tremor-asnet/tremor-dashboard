// Libs
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { Controller } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import { InputField, SelectField } from "@/ui/components";

// Constants
import { TAGS_PRICE, TYPE_PRICE } from "@/constants";
import { EXCEPT_KEYS } from "@/constants/common";

// Types
import { OptionType } from "@/types";

interface PricingProps {
  control: any;
}

const Pricing = ({ control }: PricingProps) => {
  const handlePriceKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    EXCEPT_KEYS.POSITIVE_DOUBLE.includes(e.key) && e.preventDefault();
  };

  const handleSkuKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    EXCEPT_KEYS.POSITIVE_INTEGER.includes(e.key) && e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6">
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <InputField
            id="add-product-price"
            label="Price"
            type="number"
            {...field}
            onKeyDown={handlePriceKeyDown}
          />
        )}
      />

      <Controller
        name="currency"
        control={control}
        render={({ field: { value, onChange } }) => {
          const convertedValue = value.toString();
          return (
            <SelectField
              label="Currency"
              options={TYPE_PRICE}
              value={convertedValue}
              onChange={onChange}
            />
          );
        }}
      />

      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <InputField
            id="add-product-sky"
            label="SKU"
            type="number"
            onKeyDown={handleSkuKeyDown}
            {...field}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        render={({ field: { value, onChange } }) => {
          const convertedValue = value.map(String);
          return (
            <div className="w-full">
              <label className="text-gray-500 text-sm dark:text-gray-400">
                Tags
              </label>
              <MultiSelect
                className="select-custom dark:text-white dark:border-light dark:focus:border-white"
                value={convertedValue}
                onValueChange={onChange}>
                {TAGS_PRICE.map((item: OptionType) => (
                  <MultiSelectItem key={item.value} value={item.value}>
                    {item.option}
                  </MultiSelectItem>
                ))}
              </MultiSelect>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Pricing;
