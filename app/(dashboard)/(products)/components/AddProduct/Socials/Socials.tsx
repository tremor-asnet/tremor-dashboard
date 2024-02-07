// Libs
import { Controller } from "react-hook-form";

// Components
import InputField from "@/components/common/CustomField/InputField/InputField";

interface SocialsProps {
  control: any;
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
          isLabelTransform={true}
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
          isLabelTransform={true}
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
          isLabelTransform={true}
          type="text"
          {...field}
        />
      )}
    />
  </div>
);

export default Socials;
