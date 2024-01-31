// Libs
import { MultiSelect, MultiSelectItem } from "@tremor/react";
import { Control, Controller } from "react-hook-form";

// Types
import { IPricing } from "@/types";

// Components
import SelectField from "@/components/ProductManager/common/SelectField/SelectField";
import FormInputField from "@/components/ProductManager/common/FormInputField/FormInputField";

// Constants
import { TAGS_PRICE, TYPE_PRICE } from "@/constants";

interface PricingProps {
  control: Control<IPricing>;
}

const Pricing = ({ control }: PricingProps) => (
  <div className="flex flex-col gap-6">
    <Controller
      name="price"
      control={control}
      render={({ field }) => (
        <FormInputField label="Price" placeholder="" type="text" {...field} />
      )}
    />

    <Controller
      name="currency"
      control={control}
      render={({ field }) => (
        <SelectField {...field}>
          {TYPE_PRICE.map(item => (
            <option
              className="dark:bg-primary m-2"
              key={item.value}
              value={item.value}>
              {item.option}
            </option>
          ))}
        </SelectField>
      )}
    />

    <Controller
      name="sku"
      control={control}
      render={({ field }) => (
        <FormInputField
          label="SKU"
          placeholder=""
          type="number"
          onKeyDown={e => {
            ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault();
          }}
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

export default Pricing;
