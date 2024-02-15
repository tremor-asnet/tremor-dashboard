"use client";

import { Controller, useFormContext } from "react-hook-form";

// Components
import { Title, Flex, Card } from "@tremor/react";

//Styles
import "@/styles/products.css";

// Constants
import { MESSAGES_ERROR, REGEX } from "@/constants";

const Socials = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const facebookErrorMsg = errors.facebookUrl?.message?.toString();
  const instagramErrorMsg = errors.instagramUrl?.message?.toString();
  const shopifyErrorMsg = errors.shopifyUrl?.message?.toString();

  return (
    <Card className="dark:bg-dark-tremor-primary ring-0">
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8">
        <Controller
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
              <input
                className="input-text"
                id="shoppify-handle"
                placeholder="Shoppify Handle"
                {...field}
              />
              {shopifyErrorMsg && (
                <p className="text-[11px] xs:text-xs text-red-500">
                  {shopifyErrorMsg}
                </p>
              )}
            </>
          )}
          name="shopifyUrl"
        />
        <Controller
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
              <input
                className="input-text"
                id="facebook-account"
                placeholder="Facebook Account"
                {...field}
              />
              {facebookErrorMsg && (
                <p className="text-[11px] xs:text-xs text-red-500">
                  {facebookErrorMsg}
                </p>
              )}
            </>
          )}
          name="facebookUrl"
        />
        <Controller
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
              <input
                className="input-text"
                id="instagram-account"
                placeholder="Instagram Account"
                {...field}
              />
              {instagramErrorMsg && (
                <p className="text-[11px] xs:text-xs text-red-500">
                  {instagramErrorMsg}
                </p>
              )}
            </>
          )}
          name="instagramUrl"
        />
      </Flex>
    </Card>
  );
};

export default Socials;
