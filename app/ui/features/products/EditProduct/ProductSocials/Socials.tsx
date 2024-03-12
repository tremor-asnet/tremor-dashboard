"use client";

import { Controller, useFormContext } from "react-hook-form";

// Components
import { Title, Flex, Card } from "@tremor/react";
import { InputField } from "@/ui/components";

//Styles
import "@/styles/products.css";

// Constants
import { MESSAGES_ERROR, REGEX } from "@/constants";

// Hooks
import useFocusFieldError from "@/hooks/useFocusFieldError";

const Socials = () => {
  const { control, formState } = useFormContext();

  useFocusFieldError(formState);

  return (
    <Card className="dark:bg-dark-tremor-primary ring-0">
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex
        flexDirection="col"
        alignItems="start"
        justifyContent="start"
        className="mt-4 gap-6">
        <Controller
          control={control}
          rules={{
            pattern: {
              value: REGEX.URL,
              message: MESSAGES_ERROR.INVALID_URL,
            },
          }}
          render={({ field, formState: { errors } }) => {
            const shopifyUrlErrorMessage = errors.shopifyUrl?.message || "";

            return (
              <div className="w-full mb-4">
                <InputField
                  id="edit-shopify"
                  label="Shopify Handle"
                  type="text"
                  errorMessage={shopifyUrlErrorMessage}
                  {...field}
                />
              </div>
            );
          }}
          name="shopifyUrl"
        />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: REGEX.URL,
              message: MESSAGES_ERROR.INVALID_URL,
            },
          }}
          render={({ field, formState: { errors } }) => {
            const facebookUrlErrorMessage = errors.facebookUrl?.message || "";

            return (
              <div className="w-full mb-4">
                <InputField
                  id="edit-fb"
                  label="Facebook Account"
                  type="text"
                  errorMessage={facebookUrlErrorMessage}
                  {...field}
                />
              </div>
            );
          }}
          name="facebookUrl"
        />
        <Controller
          control={control}
          rules={{
            pattern: {
              value: REGEX.URL,
              message: MESSAGES_ERROR.INVALID_URL,
            },
          }}
          render={({ field, formState: { errors } }) => {
            const instagramUrlErrorMessage = errors.instagramUrl?.message || "";

            return (
              <div className="w-full mb-4">
                <InputField
                  id="edit-ig"
                  label="Instagram Account"
                  type="text"
                  errorMessage={instagramUrlErrorMessage}
                  {...field}
                />
              </div>
            );
          }}
          name="instagramUrl"
        />
      </Flex>
    </Card>
  );
};

export default Socials;
