// Libs
import { MultiSelect, MultiSelectItem, Text } from "@tremor/react";
import { Controller } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import SelectField from "@/components/common/CustomField/SelectField/SelectField";
import InputField from "@/components/common/CustomField/InputField/InputField";

// Constants
import { TAGS_PRICE, TYPE_PRICE } from "@/constants";
import { EXCEPT_KEYS } from "@/constants/common";

// Types
import { SelectOptionData } from "@/types";

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
            label="Price"
            placeholder=""
            type="number"
            isLabelTransform={true}
            {...field}
            onKeyDown={handlePriceKeyDown}
          />
        )}
      />

      <Controller
        name="currency"
        control={control}
        render={({ field }) => <SelectField options={TYPE_PRICE} {...field} />}
      />

      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <InputField
            label="SKU"
            placeholder=""
            type="number"
            isLabelTransform={true}
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
      />
    </div>
  );
};

export default Pricing;
