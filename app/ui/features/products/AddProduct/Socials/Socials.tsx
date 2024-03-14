// Libs
import { Controller, FieldErrors } from "react-hook-form";

// Components
import { InputField } from "@/ui/components";
import { Text } from "@tremor/react";

// Constants
import { MESSAGES_ERROR, REGEX } from "@/constants";

// Types
import { NewSocial } from "@/types";

interface SocialsProps {
  control: any;
  errors: FieldErrors<NewSocial>;
}

const Socials = ({ control, errors }: SocialsProps) => {
  const facebookErrorMsg = errors.facebookUrl?.message;
  const instagramErrorMsg = errors.instagramUrl?.message;
  const shopifyErrorMsg = errors.shopifyUrl?.message;

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
        render={({ field }) => (
          <div className="mb-3">
            <InputField
              id="add-product-shopify"
              label="Shopify Handle"
              type="text"
              {...field}
            />
            <Text className="text-xs text-red-500 dark:text-red-500 mt-1">
              {shopifyErrorMsg}
            </Text>
          </div>
        )}
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
        render={({ field }) => (
          <div className="mb-3">
            <InputField
              id="add-product-fb"
              label="Facebook Account"
              type="text"
              {...field}
            />
            <Text className="text-xs text-red-500 dark:text-red-500 mt-1">
              {facebookErrorMsg}
            </Text>
          </div>
        )}
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
        render={({ field }) => (
          <div className="mb-3">
            <InputField
              id="add-product-ig"
              label="Instagram Account"
              type="text"
              {...field}
            />
            <Text className="text-xs text-red-500 dark:text-red-500 mt-1">
              {instagramErrorMsg}
            </Text>
          </div>
        )}
      />
    </>
  );
};

export default Socials;
