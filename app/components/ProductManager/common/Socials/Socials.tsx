// Libs
import { Control, Controller } from "react-hook-form";

// Components
import InputField from "@/components/common/CustomField/InputField/InputField";

// Types
import { NewSocial } from "@/types";

interface SocialsProps {
  control: Control<NewSocial>;
}

const Socials = ({ control }: SocialsProps) => (
  <div className="flex flex-col gap-6">
    <Controller
      name="shopifyUrl"
      control={control}
      render={({ field }) => (
        <InputField
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
        <InputField
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
        <InputField
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
