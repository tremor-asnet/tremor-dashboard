// Components
import { Title, Flex } from "@tremor/react";

const Socials = () => {
  const inputClasses = `w-full text-sm text-tremor-content-title py-1 mb-6 rounded-none ring-0 border-0 border-b focus:border-b-2 border-gray-300 focus:border-tremor-brand-subtle focus:outline-none hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent dark:border-white`;
  return (
    <>
      <Title className="font-primary font-bold text-primary dark:text-dark-primary text-xl leading-snug capitalize">
        Socials
      </Title>
      <Flex className="flex-col items-start justify-start mt-8 text-secondary dark:text-dark-romance text-sm font-normal">
        <input
          className={inputClasses}
          id="shoppifyHandle"
          placeholder="Shoppify Handle"
        />
        <input
          className={inputClasses}
          id="facebookAccount"
          placeholder="Facebook Account"
        />
        <input
          className={inputClasses}
          id="instagramAccount"
          placeholder="Instagram Account"
        />
      </Flex>
    </>
  );
};

export default Socials;
