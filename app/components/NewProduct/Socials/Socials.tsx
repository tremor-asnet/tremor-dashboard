"use client";

// Components
import { Title, Flex, Card } from "@tremor/react";

//Styles
import "@/styles/products.css";

interface SocialsData {
  shoppifyUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
}

const Socials = ({ shoppifyUrl, facebookUrl, instagramUrl }: SocialsData) => {
  const handleSocials = () => {
    // TODO: Handle change here
  };
  return (
    <Card className="dark:bg-dark-tremor-primary">
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8">
        <input
          className="input-text"
          id="shoppify-handle"
          placeholder="Shoppify Handle"
          onChange={handleSocials}
          value={shoppifyUrl || ""}
        />
        <input
          className="input-text"
          id="facebook-account"
          placeholder="Facebook Account"
          onChange={handleSocials}
          value={facebookUrl || ""}
        />
        <input
          className="input-text"
          id="instagram-account"
          placeholder="Instagram Account"
          onChange={handleSocials}
          value={instagramUrl || ""}
        />
      </Flex>
    </Card>
  );
};

export default Socials;
