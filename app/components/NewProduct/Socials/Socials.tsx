// Components
import { Title, Flex } from "@tremor/react";

//Styles
import "@/styles/products.css";

const Socials = ({ handleSocials }: { handleSocials: () => void }) => {
  return (
    <>
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8">
        <input
          className="input-text"
          id="shoppify-handle"
          placeholder="Shoppify Handle"
          onChange={handleSocials}
        />
        <input
          className="input-text"
          id="facebook-account"
          placeholder="Facebook Account"
          onChange={handleSocials}
        />
        <input
          className="input-text"
          id="instagram-account"
          placeholder="Instagram Account"
          onChange={handleSocials}
        />
      </Flex>
    </>
  );
};

export default Socials;
