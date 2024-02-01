// Libs
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { Control, Controller } from "react-hook-form";
import { KeyboardEvent } from "react";

// Components
import SelectField from "@/components/common/CustomField/SelectField/SelectField";
import InputField from "@/components/common/CustomField/InputField/InputField";

// Types
import { NewPricing } from "@/types";

// Constants
import { TAGS_PRICE, TYPE_PRICE } from "@/constants";

interface PricingProps {
  control: Control<NewPricing>;
}

const Pricing = ({ control }: PricingProps) => {
  const handleSkuKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6">
      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <InputField label="Price" placeholder="" type="text" {...field} />
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
            onKeyDown={handleSkuKeyDown}
            {...field}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <MultiSelect {...field}>
            {TAGS_PRICE.map(item => (
              <MultiSelectItem key={item.value} value={item.value}>
                {item.option}
              </MultiSelectItem>
            ))}
          </MultiSelect>
        )}
      />
    </div>
  );
};

export default Pricing;
