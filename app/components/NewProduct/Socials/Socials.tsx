"use client";

import { useFormContext } from "react-hook-form";

// Components
import { Title, Flex, Card } from "@tremor/react";

//Styles
import "@/styles/products.css";

interface SocialsData {
  shoppifyUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

const Socials = () => {
  const { register } = useFormContext();
  const handleSocials = () => {
    // TODO: Handle change here
  };

  return (
    <Card className="dark:bg-dark-tremor-primary">
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8">
        <input className="input-text" {...register("shopifyUrl")} />
        <input className="input-text" {...register("facebookUrl")} />
        <input className="input-text" {...register("instagramUrl")} />
      </Flex>
    </Card>
  );
};

export default Socials;
