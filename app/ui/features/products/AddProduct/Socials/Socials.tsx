// Libs
import { Control, Controller } from "react-hook-form";

// Components
import { InputField } from "@/ui/components";

// Constants
import { MESSAGES_ERROR, REGEX } from "@/constants";

// Types
import { NewSocial } from "@/types";

interface SocialsProps {
  control: Control<NewSocial>;
}

const Socials = ({ control }: SocialsProps) => {
  return (
    <>
      <Controller
        name="shopifyUrl"
        control={control}
        rules={{
          required: MESSAGES_ERROR.URL_REQUIRED,
          pattern: {
            value: REGEX.URL,
            message: MESSAGES_ERROR.URL_REQUIRED,
          },
        }}
        render={({ field, formState: { errors } }) => {
          const shopifyErrorMsg = errors.shopifyUrl?.message;

          return (
            <div className="mb-6">
              <InputField
                id="add-product-shopify"
                label="Shopify Handle"
                type="text"
                errorMessage={shopifyErrorMsg}
                {...field}
              />
            </div>
          );
        }}
      />

      <Controller
        name="facebookUrl"
        control={control}
        rules={{
          required: MESSAGES_ERROR.URL_REQUIRED,
          pattern: {
            value: REGEX.URL,
            message: MESSAGES_ERROR.URL_REQUIRED,
          },
        }}
        render={({ field, formState: { errors } }) => {
          const facebookErrorMsg = errors.facebookUrl?.message;

          return (
            <div className="mb-6">
              <InputField
                id="add-product-fb"
                label="Facebook Account"
                type="text"
                errorMessage={facebookErrorMsg}
                {...field}
              />
            </div>
          );
        }}
      />

      <Controller
        name="instagramUrl"
        control={control}
        rules={{
          required: MESSAGES_ERROR.URL_REQUIRED,
          pattern: {
            value: REGEX.URL,
            message: MESSAGES_ERROR.URL_REQUIRED,
          },
        }}
        render={({ field, formState: { errors } }) => {
          const instagramErrorMsg = errors.instagramUrl?.message;

          return (
            <div className="mb-6">
              <InputField
                id="add-product-ig"
                label="Instagram Account"
                type="text"
                errorMessage={instagramErrorMsg}
                {...field}
              />
            </div>
          );
        }}
      />
    </>
  );
};

export default Socials;
