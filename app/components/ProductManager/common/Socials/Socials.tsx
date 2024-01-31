// Libs
import { Control, Controller } from "react-hook-form";

// Components
import FormInputField from "@/components/ProductManager/common/FormInputField/FormInputField";

// Types
import { ISocial } from "@/types";

interface SocialsProps {
  control: Control<ISocial>;
}

const Socials = ({ control }: SocialsProps) => (
  <div className="flex flex-col gap-6">
    <Controller
      name="shopifyUrl"
      control={control}
      render={({ field }) => (
        <FormInputField
          label="Shopify Handle"
          placeholder=""
          type="text"
          {...field}
        />
      )}
    />

    <Controller
      name="facebookUrl"
      control={control}
      render={({ field }) => (
        <FormInputField
          label="Facebook Account"
          placeholder=""
          type="text"
          {...field}
        />
      )}
    />

    <Controller
      name="instagramUrl"
      control={control}
      render={({ field }) => (
        <FormInputField
          label="Instagram Account"
          placeholder=""
          type="text"
          {...field}
        />
      )}
    />
  </div>
);

export default Socials;
