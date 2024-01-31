"use client";

import { Controller, useFormContext } from "react-hook-form";

// Components
import { Title, Flex, Card } from "@tremor/react";

//Styles
import "@/styles/products.css";

const Socials = () => {
  const { control } = useFormContext();

  return (
    <Card className="dark:bg-dark-tremor-primary ring-0">
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8">
        <Controller
          control={control}
          render={({ field }) => (
            <input
              className="input-text"
              id="shoppify-handle"
              placeholder="Shoppify Handle"
              {...field}
            />
          )}
          name="shopifyUrl"
        />
        <Controller
          control={control}
          render={({ field }) => (
            <input
              className="input-text"
              id="facebook-account"
              placeholder="Facebook Account"
              {...field}
            />
          )}
          name="facebookUrl"
        />
        <Controller
          control={control}
          render={({ field }) => (
            <input
              className="input-text"
              id="instagram-account"
              placeholder="Instagram Account"
              {...field}
            />
          )}
          name="instagramUrl"
        />
      </Flex>
    </Card>
  );
};

export default Socials;
