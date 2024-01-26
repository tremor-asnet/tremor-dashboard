// Components
import { Title, Flex, TextInput } from "@tremor/react";

const Socials = () => {
  return (
    <>
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8 text-secondary dark:text-dark-romance text-sm font-normal">
        <TextInput
          id="shoppifyHandle"
          className="py-1 mb-4 dark:bg-transparent dark:border-white"
          placeholder="Shoppify Handle"
        />
        <TextInput
          id="facebookAccount"
          className="py-1 mb-4 dark:bg-transparent dark:border-white"
          placeholder="Facebook Account"
        />
        <TextInput
          id="instagramAccount"
          className="py-1 mb-4 dark:bg-transparent dark:border-white"
          placeholder="Instagram Account"
        />
      </Flex>
    </>
  );
};

export default Socials;
