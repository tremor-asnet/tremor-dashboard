// Libs
import { Controller, FieldErrors } from "react-hook-form";

// Components
import InputField from "@/components/common/CustomField/InputField/InputField";

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
    <div className="flex flex-col gap-6">
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
          <>
            <InputField
              label="Shopify Handle"
              placeholder=""
              type="text"
              {...field}
            />
            <p className="text-[11px] xs:text-xs text-red-500">
              {shopifyErrorMsg}
            </p>
          </>
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
          <>
            <InputField
              label="Facebook Account"
              placeholder=""
              type="text"
              {...field}
            />
            <p className="text-[11px] xs:text-xs text-red-500">
              {facebookErrorMsg}
            </p>
          </>
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
          <>
            <InputField
              label="Instagram Account"
              placeholder=""
              type="text"
              {...field}
            />
            <p className="text-[11px] xs:text-xs text-red-500">
              {instagramErrorMsg}
            </p>
          </>
        )}
      />
    </div>
  );
};

export default Socials;
